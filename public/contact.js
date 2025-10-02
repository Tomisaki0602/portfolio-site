const form = document.getElementById('contact-form');

form.addEventListener('submit', async (e) => {
  e.preventDefault();

  const data = {
    name: form.name.value,
    email: form.email.value,
    type: form.type.value,   // ここ追加
    message: form.message.value,
  };

  try {
    const res = await fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });

    if (!res.ok) throw new Error('送信中にエラーが発生しました');

    const result = await res.json();
    alert('送信成功！');
    form.reset();
  } catch (err) {
    console.error(err);
    alert(err.message);
  }
});
