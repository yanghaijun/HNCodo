/**
 * \u89C6\u56FE\u8868\u683C\u521B\u5EFA\u9F20\u6807\u60AC\u6D6E\u63D0\u793A\u65B9\u6CD5\uFF0C \u4F7F\u7528 easyui tooltip \u63D2\u4EF6\u5B9E\u73B0
 * \u89C6\u56FE\u5185\u5BB9\u6570\u636E\u5237\u65B0\u65F6\u9700\u8981\u8C03\u7528\u63D2\u4EF6\u9500\u6BC1\u65B9\u6CD5 $('.datagrid-body .tooltip').tooltip('destroy');
 * @version 1.1.4
 */
define(['./lib-1.1.2.js', 'underscore', 'vt/fetch-view-entries-1.0.1',
  'ct/jquery-ajax-lib', 'ct/easyui-tooltip-1.1.1', 'css!./tooltip-1.0.4.css'],
  function(lib, _, fetchViewEntries, $ajaxLib, tooltip){

  // tip \u7684\u6700\u5927\u9AD8\u5EA6\u548C\u5BBD\u5EA6\u5360\u7A97\u53E3 window \u4E4B\u6BD4
  var MAX_WIDTH_RATIO = 0.4;
  var MAX_HEIGHT_RATIO = 0.6;
  
  //title \u56FA\u5B9A\u503C\uFF0C \u7528\u4E8E\u8BA1\u7B97 tip \u5185\u5BB9\u9AD8\u5EA6\u9650\u5236\uFF0C \u8BBE\u7F6E\u56FA\u5B9A\u503C\u907F\u514D\u7F13\u5B58\u5BFC\u81F4\u8BA1\u7B97\u4E0D\u6B63\u786E
  var TITLE_HEIGHT = 46;

  var fetchHistory = function($el, tipContent){

    var group = $el.attr('group') || '';
    var view = group !== ''?'viwHistorysTipByDept':'viwHistorysTip';
    
    return fetchViewEntries(
      $ct.getLocalDbPath() + '/' + $el.attr('logdb'),
      view,
      {
        cache: false,
        data: {
          count: 2000,  /* \u56E0\u89C6\u56FE\u53D7 domino \u670D\u52A1\u5668\u914D\u7F6E\u9650\u5236\uFF0C \u8FD9\u91CC\u8BBE\u7F6E\u6700\u5927\u884C\u6570\uFF0C \u8D85\u8FC7\u5C06\u65E0\u6CD5\u663E\u793A */
          RestrictToCategory: $el.attr('caseid') + group
        }
      }).then(function(data){
        var history = _.has(data, 'viewentry')?data.viewentry:[];
        // \u663E\u793A\u5185\u5BB9\u53EA\u663E\u793A\u610F\u89C1\u65F6\uFF0C \u8FC7\u6EE4\u6389\u6CA1\u6709\u610F\u89C1\u7684\u6570\u636E
        if(tipContent === 'comment'){
          history = _.filter(history, function(rowData){
            var commentItem = _.find(rowData.entrydata, {'@name': 'fldComment'});
            var comment = commentItem !== undefined
              ?getEntryDataItemValue(commentItem)
              :undefined;
            return comment !== undefined && comment !== '';
          });
        }
        return history;
      });
  }
  
  var fetchSendList = function(actId){
    return $ajaxLib.fetchJson({
      url: $ct.getConfigDbName() + '/agtFlow/sendHistory?OpenAgent',
      cache: false,
      data: {
        actId: actId
      }
    }).then(function(sendList){
      // \u8FC7\u6EE4\u91CD\u590D\u7684\u53D1\u9001\u540D\u5355\uFF0C \u8F6C\u6362\u6210\u5B8C\u6210\u548C\u5DF2\u53D1\u5217\u8868
      if(sendList.length === 0){
        // \u6CA1\u6709\u5217\u8868\uFF0C \u8FD4\u56DE undefined
        return undefined;
      }
      var status = {user: {handling: [], completed: []},
        group: {handling:[], completed:[]}};
      _.each(sendList, function(sendItem){
        var completed = sendItem.completed;
        if(/\u90E8\u95E8|\u6811\u5F62/.test(sendItem.fldStartNodeType[0])){
          var itemType = 'group';
          // \u5982\u679C\u662F\u90E8\u95E8\uFF0C \u5219\u4E0D\u663E\u793A\u9876\u7EA7\u673A\u6784\u540D\u79F0
          var itemShow = sendItem.groupShow.replace(/\/[^\/]+$/ig, '');
        }else{
          var itemType = 'user';
          var itemShow = sendItem.userShow[0];
        }
        var itemList = status[itemType];
        if(completed){
          // \u4E0D\u518D\u672A\u5B8C\u6210\u5217\u8868\u4E2D\u65F6, \u53EF\u589E\u52A0\u5230\u5B8C\u6210\u5217\u8868\u4E2D
          if(!_.contains(itemList.handling, itemShow)
            && !_.contains(itemList.completed, itemShow)){
            itemList.completed = itemList.completed.concat(itemShow);
          }
        }else{
          // \u5728\u5904\u7406\u72B6\u6001\uFF0C \u5C06\u5176\u4ECE\u5B8C\u6210\u5217\u8868\u4E2D\u79FB\u9664\uFF0C \u7136\u540E\u6DFB\u52A0\u5230\u672A\u5B8C\u6210\u5217\u8868\u4E2D
          itemList.completed = _.without(itemList.completed, itemShow);
          if(!_.contains(itemList.handling, itemShow)){
            itemList.handling = itemList.handling.concat(itemShow);
          }
        }
        status[itemType] = itemList;
      });
      return status;
    });
  }
  
  var getTipTitle = function($el){
    var $titleAbstract = $('<div class="link-tip__title__abstract">');
    $titleAbstract.text($el.text());
    return $('<div class="link-tip__title">').append([
      $el.attr('proc') + ' - ' + $el.attr('node'),
      $titleAbstract
    ]);
  }
  var getTipContent = function($el, tipContent){
    
    // \u529E\u7406\u8FC7\u7A0B\u6216\u610F\u89C1\u5217\u8868
    var historyList = fetchHistory($el, tipContent);
    
    // \u529E\u7406\u72B6\u6001\u6570\u636E
    var sendList = fetchSendList($el.attr('actId'));
    
    // \u7EC4\u5408\u4E24\u8005\u7684\u5185\u5BB9\u5BF9\u8C61
    var content = {};
    // \u5185\u5BB9\u5EF6\u8FDF\u5BF9\u8C61
    var contentDeferred = $.Deferred();
    // \u5224\u65AD\u5185\u5BB9\u52A0\u8F7D\u5B8C\u6210\u65B9\u6CD5
    var resolveContentWhenFulfilled = function(){
      if(_.has(content, 'history') && _.has(content, 'sendList')){
        contentDeferred.resolve(content);
      }
    }
    // \u529E\u7406\u8FC7\u7A0B\u6570\u636E\u6574\u5408\u5230 content \u4E2D
    historyList.then(
      function(history){
        content.history = {collection: history};
        resolveContentWhenFulfilled();
      },
      function(err){
        content.history = {error: '\u83B7\u53D6\u529E\u7406\u6570\u636E\u9047\u5230\u5F02\u5E38\uFF01'}; 
        resolveContentWhenFulfilled();
      });
    // \u529E\u7406\u72B6\u6001\u6570\u636E\u6574\u5408\u5230 content \u4E2D
    sendList.then(
      function(status){
        content.sendList = {status: status};
        resolveContentWhenFulfilled();
      },
      function(err){
        content.sendList = {error: '\u83B7\u53D6\u5DF2\u53D1\u7528\u6237\u6570\u636E\u9047\u5230\u5F02\u5E38\uFF01'}; 
        resolveContentWhenFulfilled();
      });
    // \u751F\u6210\u5217\u8868
    return contentDeferred.then(function(content){
      var tipDescription = tipContent==='comment'?'\u529E\u7406\u610F\u89C1':'\u529E\u7406\u8FC7\u7A0B';
      var history = _.has(content.history, 'error')
        ?$('<div class="link-tip__history link-tip__history--error">')
          .text(content.history.error)
        :content.history.collection.length>0
        ?$('<table class="link-tip__history">')
          .append($('<caption class="link-tip__history__caption">').text(tipDescription))
          .append(_.reduce(content.history.collection, function(memo, rowData){
            // \u5012\u53D9\u663E\u793A\u529E\u7406\u8FC7\u7A0B\u6216\u610F\u89C1\u6570\u636E
            return [].concat($('<tr class="link-tip__history__row">')
                .append(_.map(rowData.entrydata, function(rowItem){
                  var columnPreCls = 'link-tip__history__column-pre';
                  var columnPreModified = columnPreCls + 
                  '--' + rowItem['@name'].replace(/^\$/, 'dollar-');
                  return $('<td class="link-tip__history__column">')
                    .append(
                      $('<pre class="' + columnPreCls + ' ' + columnPreModified + '">')
                      .text(getEntryDataItemValue(rowItem)));
                })), memo);
          }, []))
          :$('<div class="link-tip__history link-tip__history--info">')
              .text('\u6CA1\u6709' + tipDescription);
          
      var jQuerySendListItem = function(key, completed, itemList){
        var title = (completed?'\u5B8C\u6210':'\u5DF2\u53D1') + (key === 'user'?'\u7528\u6237':'\u90E8\u95E8');
        var length = itemList.length;
        if(length > 0){
          // \u5B50\u5143\u7D20\u5FC5\u987B\u4F7F\u7528 addClass \u65B9\u6CD5\u52A0\u8F7D\u7C7B\uFF0C \u76F4\u63A5\u4F7F\u7528 html string \u65B9\u5F0F\u5C06\u65E0\u6CD5\u5728 ie8 \u4E2D\u52A0\u8F7D\u5B50\u5143\u7D20
          return $('<li class="link-tip__send-list__item">')
            .append($('<span>').addClass('link-tip__send-list__item__title')
              .text(title))
            .append(_.map(itemList, function(itemShow, index){
              // ie8 \u4E0D\u652F\u6301 last-child css \uFF0C \u9700\u8981\u589E\u52A0\u7C7B\u540D\u5904\u7406\u6837\u5F0F
              var lastModified = index === length - 1
                ?' link-tip__send-list__item__value--last'
                :'';
              return $('<span>')
                .addClass('link-tip__send-list__item__value' + lastModified)
                .text(itemShow);
            }));
        }
      }
      var sendList = _.has(content.sendList, 'error')
        ?$('<div class="link-tip__send-list link-tip__send-list--error">')
          .text(content.sendList.error)
        :content.sendList.status === undefined
        ?undefined
        :!_.isEqual({}, content.sendList)
        ?$('<ul class="link-tip__send-list">')
          .append(_.reduce(content.sendList.status, function(memo, item, key){
            if(item.handling.length > 0){
              memo = memo.concat(jQuerySendListItem(key, false, item.handling));
            }
            if(item.completed.length > 0){
              memo = memo.concat(jQuerySendListItem(key, true, item.completed));
            }
            return memo;
          }, []))
        :undefined;
      // \u8FD4\u56DE\u7684\u5143\u7D20\u4F1A\u88AB\u63D2\u4EF6\u8BBE\u7F6E display: block; \u4E3A\u5B9E\u73B0\u5BBD\u5EA6\u81EA\u52A8\u8BBE\u7F6E\uFF0C \u589E\u52A0\u4E00\u4E2A\u5185\u5C42\u5BB9\u5668\u5C5E\u6027 inline-block; 
      return $('<div class="link-tip__container">')
          .append([sendList, history]);
      
    }).promise();
  }
  
  var getEntryDataItemValue = lib.getEntryDataItemValue;
  
  var query = $ct.getQueryParameters();
  var options = _.has(query, 'dc')?{descendantCount: query.dc}:undefined;

  /**
   * \u8BBE\u7F6E tip \u5185\u5BB9\u6700\u5927\u5927\u5C0F\uFF0C \u5FC5\u987B\u5728 onShow \u6267\u884C\u524D\u6267\u884C
   */
  var setContentMaxBox = function($target){
    // \u6570\u636E\u672A\u52A0\u8F7D\u5B8C\u6210\u65F6\uFF0C \u4E0D\u5904\u7406
    if($target.data('loaded') === undefined){
      return undefined;
    }
    var $tip = $target.tooltip('tip');
    // \u901A\u8FC7\u6570\u636E\u907F\u514D\u91CD\u590D\u8BBE\u7F6E\uFF0C tip \u9690\u85CF\u65F6\u91CD\u7F6E
    if($tip.data('max-set-up') !== undefined){
      return undefined;
    }
    $tip.data('max-set-up', 1);
    $('.tooltip-content', $tip).addClass('tooltip-content--office');
    var winWidth = Math.floor($(window).width());
    var winHeight = Math.floor($(window).height());
    var maxWidth = winWidth * MAX_WIDTH_RATIO;
    var maxHeight = winHeight * MAX_HEIGHT_RATIO;
    
    // \u8BBE\u7F6E\u5185\u5BB9\u5143\u7D20\u6700\u9AD8\u9AD8\u5EA6
    $('.link-tip__container', $tip)
      .css({
        'maxWidth': maxWidth,
        'maxHeight': maxHeight - TITLE_HEIGHT
      });
  }
  
  /**
   * @param {'comment'|'history'} \u8FC7\u7A0B\u7C7B\u578B\uFF0C \u663E\u793A\u610F\u89C1\u6216\u5168\u90E8\u8FC7\u7A0B
   */
  var officeLinkTip = function(linkSelector, tipContent){
    // \u6211\u7684\u5DE5\u4F5C\u9F20\u6807\u63D0\u793A
    return tooltip($(linkSelector).filter('.datagrid__link--office'), {
      className: 'link-tip link-tip--office',
      adjustPosition: 'shift',    /* ct \u4E2D\u65B9\u6CD5\u53EF\u4EE5\u5B9E\u73B0\u53F3\u4FA7 shift \u65B9\u5F0F\u6821\u4F4D*/ 
      position: 'right',
      content: function(){
        var $target = $(this);
        var $title = getTipTitle($target);
        getTipContent($target, tipContent).then(function(content){
          $target.data('loaded', 1)
          .tooltip('update', [].concat($title, content));
        });
        return '...';
      },
      onUpdate: function(content){
        // \u5185\u5BB9\u66F4\u65B0\uFF0C \u8BBE\u7F6E\u5185\u5BB9\u9AD8\u5EA6\uFF0C \u4F7F\u5176\u7A97\u53E3\u53EF\u89C1\uFF0C 
        // \u6B64\u4E8B\u4EF6\u5185\u8C03\u7528\u53EF\u4EE5\u9002\u5E94\u5185\u5BB9\u53D8\u5316\u540E tip \u7684\u6700\u5927\u5927\u5C0F\u53D8\u5316\uFF0C \u4E14\u4E0D\u4F1A\u56E0\u6B64\u5BFC\u81F4\u5B9A\u4F4D\u9519\u8BEF
        setContentMaxBox($(this));
      },
      onPosition: function(left, top){
        // \u8BBE\u7F6E\u5185\u5BB9\u9AD8\u5EA6\uFF0C \u4F7F\u5176\u5728\u7A97\u53E3\u53EF\u89C1\uFF0C \u6B64\u4E8B\u4EF6\u5185\u8C03\u7528\u53EF\u4EE5\u9002\u5E94\u7A97\u53E3\u53D8\u5316\u540E tip \u7684\u6700\u5927\u5927\u5C0F\u53D8\u5316
        setContentMaxBox($(this));
      },
      onHide: function(){
        var $target = $(this);
        var $tip = $target.tooltip('tip');
        // \u91CD\u7F6E\u5DF2\u8BBE\u7F6E\u6700\u5927\u9AD8\u5EA6
        $tip.removeData('max-set-up');
      }
    });
  };

  var queryPersonSet = _.memoize(function(){
    var querySetTimeStamp = $vt.tip.timeStamp = $vt.tip.timeStamp || _.now();
    return $.ajax({
      url: $ct.getConfigDbName() + '/personalSet?OpenAgent',
      dataType: 'json',
      data: {
        _: querySetTimeStamp
      }
    })
    .then($ajaxLib.onFetchJson, $ajaxLib.onFetchJsonFail)
  });
  
  var linkTip = function(linkSelector){
    var linkSelector = linkSelector||'.datagrid a[logdb][caseid]';
    var $link = $(linkSelector);
    if($link.length > 0){
      var personalSet = queryPersonSet();
      
      // \u5EF6\u8FDF\u521B\u5EFA tooltip \u5BF9\u8C61\uFF0C \u907F\u514D\u9F20\u6807\u5FEB\u901F\u5212\u8FC7\u65F6\u521B\u5EFA\u8FC7\u591A\u5BF9\u8C61\uFF0C \u9020\u6210\u5BA2\u6237\u7AEF\u54CD\u5E94\u8FC7\u6162
      var waitTime = 200;
      var loadTooltip = _.debounce(function(){
        var $target = $(this);
        // is(':hover') \u4E0D\u652F\u6301\u65E7\u7248\u672C\u6D4F\u89C8\u5668\uFF0C \u53EA\u53EF\u9006\u5411\u5224\u65AD
        if($('a:hover').is($target) && !$target.is('.tooltip-f')){
          return personalSet
          .then(function(data){
            if(!_.has(data, 'fldTipSwitch$OfficeView') || data.fldTipSwitch$OfficeView[0]){
              var tipContent = _.has(data, 'fldTipContent$OfficeView')
                ?data.fldTipContent$OfficeView[0]
                :'history';
              officeLinkTip($target, tipContent);
              if($('a:hover').is($target)){
                $target.tooltip('show');
              }
            }
          });
        }
      }, waitTime);
      $link.on('mouseenter', loadTooltip);
    }
  };
  return {
    linkTip: linkTip
  }
});
