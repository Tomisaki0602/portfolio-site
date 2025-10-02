const form = document.getElementById('contactForm');

form.addEventListener('submit', async (event) => {
  event.preventDefault(); // ページリロードを防ぐ

  const data = {
    name: form.name.value,
    email: form.email.value,
    type: form.type.value,
    message: form.message.value
  };

  try {
    const res = await fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json; charset=UTF-8' },
      body: JSON.stringify(data)
    });

    const result = await res.json();

    if (res.ok) {
      alert(result.message || '送信成功！');
      form.reset();
    } else {
      alert(result.message || '送信に失敗しました');
    }
  } catch (err) {
    console.error(err);
    alert('送信中にエラーが発生しました');
  }
});
