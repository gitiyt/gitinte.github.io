const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// خدمة الملفات الثابتة
app.use(express.static('public'));

// نقطة النهاية لجدول المباريات
app.get('/schedule', (req, res) => {
    const schedule = [
        { match: "الفريق أ ضد الفريق ب", time: "18:00 بتوقيت UTC" },
        { match: "الفريق ج ضد الفريق د", time: "20:00 بتوقيت UTC" }
    ];
    res.json(schedule);
});

// بدء الخادم
app.listen(PORT, () => {
    console.log(`الخادم يعمل على http://localhost:${PORT}`);
});
