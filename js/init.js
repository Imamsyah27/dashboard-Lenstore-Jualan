document.addEventListener("DOMContentLoaded", async () => {

    try {

        // reset tampilan jika sudah berganti hari UTC
        await resetDailyUTC();

        // load dashboard default
        await loadData();

    } catch (err) {

        console.error(err);

        alert("Gagal memuat dashboard");
    }

});

// refresh data setiap 30 detik
setInterval(() => {
    loadData();
}, 30000);
