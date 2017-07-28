const sendNotification = () => {
  const token = 'xxxxxxxxxxxxxxxxxxxxxxx';
  const roomId = '123456789';
  const label = 'label:xxx-xxxx-xx';
  const threads = GmailApp.search(`${label} is:unread`);

  if (threads == null || threads.lenght === 0) {
    return;
  }
  threads.forEach((thread) => {
    const msgs = thread.getMessages();
    msgs.forEach((msg) => {
      const subject = msg.getSubject();
      const client = ChatWorkClient.factory({
        token,
      });
      client.sendMessage({
        room_id: roomId,
        body: `[info][title]タイトル - ${subject}[/title]
        ${body} [/info]`,
      });
      msg.markRead();
    });
  });
};
