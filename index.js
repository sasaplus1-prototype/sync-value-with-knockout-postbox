(function(){

  'use strict';

  var vm = {};

  function TabViewModel() {
    this.activeTab = ko.observable('tab1').publishOn('change-tab');
    this.clickTab = (function(element, root, event) {
      this.activeTab(element.getAttribute('data-tab'));
    }).bind(this);
  }

  function Contents1ViewModel() {
    this.activeTab = ko.observable().subscribeTo('change-tab', true);
    this.visible = ko.pureComputed(function() {
      return this.activeTab() === 'tab1';
    }, this);
  }

  function Contents2ViewModel() {
    this.activeTab = ko.observable().subscribeTo('change-tab', true);
    this.visible = ko.pureComputed(function() {
      return this.activeTab() === 'tab2';
    }, this);
  }

  vm.tab = new TabViewModel;
  vm.contents1 = new Contents1ViewModel;
  vm.contents2 = new Contents2ViewModel;

  ko.applyBindings(vm);

}());
