async function loadData() {

    const todayUTC = getUTCDate();

    const { data, error } = await supabaseClient
        .from("orders")
        .select("*")
        .eq("dashboard", currentDashboard)
        .order("id", { ascending: true });

    if (error) {
        console.error(error);
        return;
    }

    tbody.innerHTML = "";

    for (let i = 0; i < data.length; i++) {

        const item = data[i];

        // reset tombol setiap hari UTC
        const sudahCheck =
            item.last_check_utc === todayUTC;

        const paketText =
            `H${item.paket_terkirim}/H${item.paket_total}`;

        const wa =
            item.nomor_whatsapp || "-";

        const ket =
            item.keterangan || "";

        const tr = document.createElement("tr");

        tr.innerHTML = `
            <td>${i + 1}</td>

            <td>${item.nomor_pesanan}</td>

            <td>
                <span
                    class="copy-tag"
                    onclick="copyTag('${item.tagar}')">
                    ${item.tagar}
                </span>
            </td>

            <td>${wa}</td>

            <td>${paketText}</td>

            <td>
                <button
                    class="check-btn"
                    onclick="checkDaily(${item.id})"
                    ${sudahCheck ? "disabled" : ""}>
                    ✓
                </button>
            </td>

            <td>${ket}</td>
        `;

        tbody.appendChild(tr);
    }
}
