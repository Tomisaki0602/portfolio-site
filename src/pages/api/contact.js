export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).json({ message: 'Method not allowed' });

  const { name, email, message } = req.body;

  console.log('フォーム送信:', { name, email, message });

  // TODO: メール送信やデータベース保存処理をここに追加

  return res.status(200).json({ message: '送信成功！' });
}
