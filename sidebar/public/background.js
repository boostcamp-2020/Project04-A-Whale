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

const opt = {
  type: 'basic',
  title: '마감시간 임박',
  message: '',
  iconUrl: './icon.png',
};

whale.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.message === 'dueDateCheck') {
    opt.message = request.detail.title;
    whale.notifications.create(request.detail.title, opt);
    whale.notifications.clear(request.detail.title);
    sendResponse({ message: 'hi to you' });
  }
});
