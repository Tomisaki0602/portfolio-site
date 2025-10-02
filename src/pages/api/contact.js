import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_ANON_KEY; // またはサービスキー
const supabase = createClient(supabaseUrl, supabaseKey);

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  const { name, email, message } = req.body;

  const { data, error } = await supabase
    .from('contacts')   // Supabase 上のテーブル名
    .insert([{ name, email, message }]);

  if (error) {
    console.error(error);
    return res.status(500).json({ message: '保存に失敗しました' });
  }

  return res.status(200).json({ message: '送信成功！' });
}
