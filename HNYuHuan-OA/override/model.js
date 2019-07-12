/**
 * @events    For tree group, we trigger a 'selectUser' event   @see @function toggleSelectUser.
 * @version 1.0.2
 */
define(['backbone', 'underscore', './core-1.0.3.js'], function(Backbone, _, app){
  window.Group = Backbone.Model.extend({
    initialize: function(){
    this.once('change:checked change:selected', function(group){
        if(this.isCandidate()&&!this.has('users'))
          //replace the standerd '/' in url for query param
          this.fetch({ url: this.url().replace(/\/([^\/]+)$/ig, '&groupid=$1') }).then(     
              function(response){
                if(!response.users){
                  group.collection.disableItem(group, '\u65E0\u53EF\u9009\u7528\u6237!');
                  group.set('disabled', true);
                }
                return response;
              }
          );    
      });
    },
    idAttribute : 'name',
    defaults: {
      name:'', title:'', affix: '', _selectedUserOrder: 0 /*the users selectedOrder for tree group*/
    },
    optionSetting: function(){
      return {
        title: this.get('title'),
        value: this.get('name'),
        disabled: this.get('disabled'),
        affix: this.get('affix'),
        selected: this.get('selected')
      }
    },
    isUpper: function(){
      return this.get('isUpper')||this.get('isUpper_1')||false;
    },
    isCandidate: function(){
      return this.get('isGroup')||this.get('isGroup_1')||false;
    },
    toggleSelectUser: function(userId, value, isOrder){
      //direct select the user in group's user attribute
      if(isOrder)
        this.set('_selectedUserOrder', this.get('_selectedUserOrder')+1);
      var users = this.get('users');
      var user = _.findWhere(this.get('users'), { loginId:  userId });
      _.extend(user, {selected: value, _selectedUserOrder: this.get('_selectedUserOrder')});
      //if select user, then select the group
      if(value)
        this.set('selected', true);
      this.trigger('selectUser', this, user, value);
      //if there is no selected users, then unselect the group 
      if(!value&&this.getSelectedUsers().length==0)
        this.set('selected', false);
    },
    getSelectedUsers: function(isOrder){
      var users = _.where(this.get('users'), {selected: true});
      return isOrder?_.sortBy(users, '_selectedUserOrder'):users;
    },
    disableUsers: function(properties, des){
      _.each(_.where(this.get('users'), properties), function(user){
        _.extend(user, {disabled: true, affix: des});
      });
    }
  });
  
  window.User = Backbone.Model.extend({
      idAttribute : 'loginId',
      defaults : {
      loginId:'', nickname:'', affix: ''
    },
    optionSetting: function(){
      return {
        title: this.get('nickname'),
        value: this.get('loginId'),
        disabled: this.get('disabled'),
        selected: this.get('selected'),
        affix: this.get('affix')
      }
    }
  });
  
  window.SelectedList = Backbone.Collection.extend({
    initialize: function(){
      this._selectedOrder = 0;      // record the order for sorting the selected item
      this.on('reset', function(){  this._selectedOrder = 0;  });
      this.on('change:selected', function(item){  item.set('_selectedOrder', this._selectedOrder++);  });
    },
     getSelected: function(isOrder){
    //   debugger
    //   var num = localStorage.getItem("personNum");
    //   if("" != num&&num!="null"&&num!="undefined"){
    //      var numArry = num.split(",");
    //     var numArryLength = numArry.length;
    //     var modelsLength = this.models.length;
    //     if(modelsLength >= numArryLength){
    //       for(var i=0;i<this.models.length;i++){
    //         this.models[i].changed.selected = true;
    //         this.models[i].attributes.selected = true;
    //       }
    //     }
    //   }
      var list = this.where({'selected': true});
      return isOrder?_.sortBy(list, function(item){ return item.get('_selectedOrder'); }):list;
    },
    select: function(id, isOrder){
      var item = this.get(id);
      item.set('selected', true);
      if(isOrder){
        this._selectedOrder++;
        item.set('_selectedOrder', this._selectedOrder);
      }
    },
    disableItem: function(item, des){
      item.set('disabled', true);
      item.set('affix', des||app.NO_DESCRIPTION);
    },
    disableItems: function(properties, des){
      _.each(this.where(properties), function(item){
        this.disableItem(item, des);
      }, this);
    }
  });
  
  window.GroupList = SelectedList.extend({
      model: Group,
      modelId: function(attrs){   
      // merge ni-song user's group and ni-song group
      var id = _.has(attrs, 'name')?attrs.name:attrs;
      return ((attrs.isGroup||attrs.isUpper)?'0/':'1/') + id;
    }
  });
  
  window.UserList = SelectedList.extend({
    model: User
  });
  
  window.Flow = Backbone.Model.extend({
    initialize: function(){
      //disable the filtered flow
      var filters = app.filters,
      flow = this;
      if($.isArray(filters)){
        _(filters)
        .chain()
        .where({target:'FLOW'})
        .each(function(filter){
          if($.isFunction(filter.filter))
            if(filter.filter(flow)){
              flow.collection.disableItem(flow, filter.description||'');
            }
        });
      }
      this.once('change:selected', function(flow){
        if(!this.has('groups')&&this.id)
          //replace the standerd '/' in url for query param
          this.fetch({ url: this.url().replace(/\/([^\/]+$)/ig, '&flowid=$1') }).then(
              function(response){
                if(!response.groups){
                  flow.collection.disableItem(flow, '\u65E0\u53EF\u9009\u90E8\u95E8!');
                  flow.set({'groups':[]});
                }
                return response;
              }
          );  
      });
    },
    idAttribute: 'flowid',
    defaults : {
      title:'', flowid:'', nextNodeType:'', affix:''
    },
    nsGroupType: function(){
      return this.get('grouptype_1')||'';
    },
    nsUserType: function(){
      return this.groupType();
    },
    groupType: function(){
      return this.get('grouptype');
    },
    nsUserGroup: function(){
      return _.where(this.get('groups'), {'isGroup': true})[0];
    },
    nsGroups: function(){
      return _.where(this.get('groups'), {'isGroup_1': true});
    },
    optionSetting: function(){
      return {
        title: this.get('title'),
        value: this.get('flowid'),
        disabled: this.get('disabled'),
        affix: this.get('affix'),
        selected: this.get('selected')
      }
    }
  });
  
  window.FlowList = SelectedList.extend({
    model: Flow,
    parse: function(data){
      return $.isArray(data)?data:[data];
    }
  });
  
  $(function(){ 
    Backbone.emulateHTTP = true;
    Backbone.emulateJSON = true;
    var filter = { flows:{}, groups:{}, users:{} };
    //\u91CD\u5199\u540C\u6B65\u65B9\u6CD5, \u5904\u7406\u7C7B\u578B\u6539\u4E3Axml, \u540C\u65F6\u63D0\u4EA4\u9700\u8981\u7684\u6570\u636E 
    Backbone.sync = function(method, model, options) {
      
      var type = {
          'read': 'POST'
      }[method];
      
        // Default options, unless specified.
        _.defaults(options || (options = {}), {
          emulateHTTP: Backbone.emulateHTTP,
          emulateJSON: Backbone.emulateJSON
        });
  
      // Default JSON-request options.
      var params = {type: type, dataType: 'xml json'};
      var getLowerAttr = options.getLowerAttr;
      // \u5B9A\u4E49\u54CD\u5E94\u683C\u5F0F\u8F6C\u6362\u51FD\u6570
      params.converters = {
        'xml json': function(xhrResult){
          if($.isArray(xhrResult)||$.isPlainObject(xhrResult))  return xhrResult;
          else if($.isXMLDoc(xhrResult))  
            var xmlDoc = xhrResult;
          else
            throw 'server error';
          var flows, groups, users, flow, group, user, usertype, usertype_1, errors, error, haslower;
          var index;
          $('root>*', xmlDoc).each(function(){
            var text = $(this).text().split('|');
            switch($(this).prop('tagName')){
              case 'flow':
                //new flow
                (flows=flows||[]).push({
                  'flowid':text[1], 'title':text[0], 
                  nextNodeType: $(this).attr('nnt'), 
                  'interfaces': $(this).attr('ifc'),
                  'user-count': $(this).attr('user-count')
                 });
                break;
              case 'remark':
                _.extend(flow||flows[0], { 'remark': text[0]});
                break;
              case 'haslower':
                haslower = text[0];
                break;
              case 'group':
                group = {name:text[1], title: text[0], isGroup:true};
                (groups = groups||[]).push(group);
                break;
              case 'uppergroup':
                //tree group, for sort, if in groups, move the group to the end or append it
                if(groups && (index = _.findIndex(groups, function(group){ return group.name == text[1]; })));
                if(index>-1)
                  _.extend(group = groups.splice(index, 1)[0], { isUpper: true });
                else
                  group = { name:text[1], title: text[0], isUpper: true };
                (groups = groups||[]).push(group);
                break;
              case 'grouptype':
                flow = _.extend(flow||{}, {grouptype: text[0]});
                break;
              case 'grouptopdeep':
                flow = _.extend(flow||{}, { 'grouptopdeep': text[0] });
                break;
              case 'user':
              case 'user_1':
                user = {loginId:text[1], nickname: text[0]};
                if(_.indexOf(app.handlers, text[1])>-1)               //\u7ECF\u529E\u6807\u8BB0
                  user.affix = app.handledDes;
                (users = users||[]).push(user);
                break;
              case 'userlower':
              case 'userlower_1':
                (_.findWhere(users, {loginId: text[0]}) || {}).isLower = true;
                break;
              case 'grouplower':
              case 'grouplower_1':
                (_.findWhere(groups, {name: text[0]}) || {}).isLower = true;
                break;
              case 'usertype':
                usertype = text[0];
                break;
              case 'usertype_1':
                usertype_1 = text[0];
                break;
              case 'group_1':
                group = {name:text[1], title: text[0], isGroup_1:true};
                (groups = groups||[]).push(group);
                break;
              case 'uppergroup_1':
                //tree group, for sort, if in groups, move the group to the end or append it
                if(groups && (index = _.findIndex(groups, function(group){ return group.name == text[1]; })));
                if(index>-1)
                  _.extend(group = groups.splice(index, 1)[0], { isUpper_1: true });
                else
                  group = { name:text[1], title: text[0], isUpper_1: true };
                (groups = groups||[]).push(group);
                break;
              case 'grouptype_1':
                flow = _.extend(flow||{}, {grouptype_1: text[0]});
                break;
              case 'grouptopdeep_1':
                flow = _.extend(flow||{}, {grouptopdeep_1: text[0]});
                break;
              case 'signenddate':
                _.extend(flow, { 'usersignlimit': text[0]});
                break;
              case 'bjenddate':
                _.extend(flow, { 'usercompletelimit': text[0]});
                break;
              case 'signenddate_1':
                _.extend(flow, { 'groupsignlimit': text[0]});
                break;
              case 'bjenddate_1':
                _.extend(flow, { 'groupcompletelimit': text[0]});
                break;
              case 'error':
                (errors = errors||[]).push({  textMessage: $(this).text() });
                break;
              default:
                //newResult.flows = newResult.flows||[{groups:[]}];
                //newResult.flows[0][$(this).prop('tagName')] = $.trim($(this).text());
            }
          });
          if(flows){
            if(flows.length>0)    flow = _.extend(flows[0], flow);
            else      flows.push(flow);
            flow.groups = groups;
            if(users) groups[0].users = users;
            if(usertype&&(group=_.findWhere(groups, {isGroup : true})))   group.usertype = usertype;
            if(usertype_1&&(group=_.findWhere(groups, {isGroup_1 : true})))   group.usertype_1 = usertype_1;
          }else if(flow){
            flow.groups = groups;
            if(users) groups[0].users = users;  
            if(usertype&&(group=_.findWhere(groups, {isGroup : true})))   group.usertype = usertype;
            if(usertype_1&&(group=_.findWhere(groups, {isGroup_1 : true})))   group.usertype = usertype_1;
          }else{
            if(users) (group=group||{}).users = users;  
            if(usertype&&group)   group.usertype = usertype;
            if(usertype_1&&group)   group.usertype = usertype_1;
          }
          if(haslower&&$.isFunction(getLowerAttr))
            getLowerAttr(eval(haslower))
          return _.extend(flows||flow||group||{}, errors&&{errors: errors});
        }
      }
  
      // Ensure that we have a URL. Use  url
      if (!options.url) {
        params.url = _.result(model, 'url') || urlError();
      }
  
      // append the app query string 
      //params.url += (params.url.indexOf('?')>-1?'&':'?') + $.param(app.query);
  
      // Ensure that we have the appropriate request data.
      if (options.data == null && model && (method === 'create' || method === 'update' || method === 'patch')) {
        params.contentType = 'application/json';
        params.data = JSON.stringify(options.attrs || model.toJSON(options));
      }
  
      // For older servers, emulate JSON by encoding the request into an HTML-form.
      if (options.emulateJSON) {
        params.contentType = 'application/x-www-form-urlencoded';
        params.data = params.data ? {model: params.data} : {};
      }
  
      // add the quering post data
      _.extend((params.data=params.data||{}), app.querypost);
      
      // For older servers, emulate HTTP by mimicking the HTTP method with `_method`
      // And an `X-HTTP-Method-Override` header.
      if (options.emulateHTTP && (type === 'PUT' || type === 'DELETE' || type === 'PATCH')) {
        params.type = 'POST';
        if (options.emulateJSON) params.data._method = type;
        var beforeSend = options.beforeSend;
        options.beforeSend = function(xhr) {
          xhr.setRequestHeader('X-HTTP-Method-Override', type);
          if (beforeSend) return beforeSend.apply(this, arguments);
        };
      }
  
      // Don't process data on a non-GET request.
      if (params.type !== 'GET' && !options.emulateJSON) {
        params.processData = false;
      }
  
      // Pass along `textStatus` and `errorThrown` from jQuery.
      var error = options.error;
      options.error = function(xhr, textStatus, errorThrown) {
        options.textStatus = textStatus;
        options.errorThrown = errorThrown;
        if (error) error.call(options.context, xhr, textStatus, errorThrown);
      };
  
      // Make the request, allowing the user to override any Ajax options.
      var xhr = options.xhr = Backbone.ajax(_.extend(params, options));
      model.trigger('request', model, xhr, options);
      return xhr;
    };  
    
  });

  return {
    Group: Group,
    User: User,
    SelectedList: SelectedList,
    GroupList: GroupList,
    UserList: UserList,
    Flow: Flow,
    FlowList: FlowList
  }
});