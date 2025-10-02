export async function post({ request }) {
  try {
    const body = await request.json();
    const { name, email, type, message } = body;

    const { data, error } = await supabase
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
