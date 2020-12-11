whale.contextMenus.create({
  id: 'whaleTodoList',
  title: '올해는 꼭!',
  contexts: ['all'],
});

whale.contextMenus.onClicked.addListener(() => {
  whale.sidebarAction.show();
});

whale.notifications.onClicked.addListener(() => {
  whale.sidebarAction.show();
});
