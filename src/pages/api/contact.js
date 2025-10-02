import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_ANON_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);

export async function post({ request }) {
  try {
    const body = await request.json();
    const { name, email, type, message } = body;

    // 必須カラムにすべて値を入れる
    if (!name || !email || !type || !message) {
      return new Response(JSON.stringify({ message: '必須項目が不足しています' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json; charset=UTF-8' }
      });
    }

    const { error } = await supabase
      .from('contacts')
      .insert([{ name, email, type, message }]);

    if (error) throw error;

    return new Response(JSON.stringify({ message: '送信成功！' }), {
      status: 200,
      headers: { 'Content-Type': 'application/json; charset=UTF-8' }
    });
  } catch (err) {
    console.error(err);
    return new Response(JSON.stringify({ message: '保存に失敗しました', error: err.message }), {
      status: 500,
      headers: { 'Content-Type': 'application/json; charset=UTF-8' }
    });
  }
}
