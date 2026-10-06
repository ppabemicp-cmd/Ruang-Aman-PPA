const WEB_APP_URL = "https://script.google.com/macros/s/AKfycbyWHF3_UqtWBUC7Y5gFs-kDWoQWFlh92gthLXqjDkxO8M3HA0poeRPZW8bnCAmBgxVr/exec";

document.getElementById("formAduan").addEventListener("submit", async function(event) {
  event.preventDefault();

  const data = {
    jenis: document.getElementById("jenis").value,
    anonim: document.getElementById("anonim").value,
    kontak: document.getElementById("kontak").value,
    cerita: document.getElementById("cerita").value
  };

  try {
    await fetch(WEB_APP_URL, {
      method: "POST",
      mode: "no-cors",
      headers: {
        "Content-Type": "text/plain;charset=utf-8"
      },
      body: JSON.stringify(data)
    });

    alert("Terima kasih. Aduan Anda telah berhasil dikirim.");

    document.getElementById("formAduan").reset();

  } catch (error) {
    alert("Aduan belum dapat dikirim. Silakan coba lagi.");
  }
});