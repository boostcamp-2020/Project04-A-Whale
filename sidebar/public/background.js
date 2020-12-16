// whale.contextMenus.create({
//   id: 'whaleTodoList',
//   title: '올해는 꼭!',
//   contexts: ['all'],
// });

// whale.contextMenus.onClicked.addListener(() => {
//   whale.sidebarAction.show();
// });

// whale.notifications.onClicked.addListener(() => {
//   whale.sidebarAction.show();
// });

let myNotificationID = null;

whale.alarms.onAlarm.addListener((alarm) => {
  whale.notifications.create(
    {
      type: 'basic',
      iconUrl: 'icon.png',
      title: '[오늘은 꼭] 등록된 알람',
      message: `${alarm.name}개의 할 일이 있습니다.`,
      buttons: [
        {
          title: '자세히 보기',
        },
        {
          title: '닫기',
        },
      ],
      priority: 0,
    },
    (id) => {
      myNotificationID = id;
    }
  );
});

whale.notifications.onButtonClicked.addListener(async (notifId, btnIdx) => {
  if (notifId === myNotificationID) {
    if (btnIdx === 0) {
      whale.runtime.sendMessage({ popup: true }, (res) => {
        console.log(res);
      });
      whale.sidebarAction.show();
    }
  }
});
