document.addEventListener("DOMContentLoaded", function () {
    const darkModeToggle = document.getElementById("darkModeToggle");
    const body = document.body;

    // ✅ تفعيل الوضع الليلي إذا كان محفوظًا
    if (localStorage.getItem("darkMode") === "enabled") {
        body.classList.add("dark-mode");
        darkModeToggle.textContent = "☀️";
    }

    // ✅ تبديل الوضع الليلي والفاتح
    darkModeToggle.addEventListener("click", function () {
        body.classList.toggle("dark-mode");

        if (body.classList.contains("dark-mode")) {
            localStorage.setItem("darkMode", "enabled");
            darkModeToggle.textContent = "☀️";
        } else {
            localStorage.setItem("darkMode", "disabled");
            darkModeToggle.textContent = "🌙";
        }
    });

    // ✅ حساب تكلفة الفويس أوفر
    const ratePer30SecInput = document.getElementById("ratePer30Sec");
    const durationSecInput = document.getElementById("durationSec");
    const durationMinInput = document.getElementById("durationMin");
    const priceUSD = document.getElementById("priceUSD");
    const priceEGP = document.getElementById("priceEGP");

    const exchangeRate = 50;

    function calculatePrice() {
        let ratePer30Sec = parseFloat(ratePer30SecInput.value);
        let durationSec = parseFloat(durationSecInput.value);

        if (isNaN(ratePer30Sec) || isNaN(durationSec) || durationSec <= 0) {
            priceUSD.textContent = "0";
            priceEGP.textContent = "0";
            return;
        }

        let priceInUSD = (durationSec / 30) * ratePer30Sec;
        let priceInEGP = priceInUSD * exchangeRate;

        priceUSD.textContent = priceInUSD.toFixed(2);
        priceEGP.textContent = priceInEGP.toFixed(2);
    }

    // ✅ تحديث المدخلات عند تغيير القيم
    ratePer30SecInput.addEventListener("input", calculatePrice);
    durationSecInput.addEventListener("input", () => {
        durationMinInput.value = (durationSecInput.value / 60).toFixed(2);
        calculatePrice();
    });
    durationMinInput.addEventListener("input", () => {
        durationSecInput.value = (durationMinInput.value * 60).toFixed(0);
        calculatePrice();
    });

    calculatePrice();

    // ✅ وظيفة نسخ رقم الهاتف
    function copyPhoneNumber() {
        const phoneNumber = "01055068150"; // الرقم داخل الزر
        navigator.clipboard.writeText(phoneNumber).then(() => {
            alert("✅ تم نسخ رقم الهاتف: " + phoneNumber);
        }).catch(err => {
            console.error("❌ فشل النسخ", err);
        });
    }

    // ✅ ربط زر النسخ بوظيفته
    document.querySelector(".copy-btn").addEventListener("click", copyPhoneNumber);
});