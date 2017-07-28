const sendNotification = () => {
  const token = process.env.CW_API_TOKEN;
  const roomId = process.env.ROOMID;
  const label = process.env.LABEL;
  const threads = GmailApp.search(`${label} is:unread`);

  if (threads == null || threads.lenght === 0) {
    return;
  }
  threads.forEach((thread) => {
    const msgs = thread.getMessages();
    msgs.forEach((msg) => {
      const subject = msg.getSubject();
      const body = msg.getPlainBody();
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
