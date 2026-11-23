/* ==========================================================================
   SANAD (سَنَد) — Interactive Prototype Logic Bundle
   Handles Screen Navigation, I18n (Arabic/English), Modal Flows,
   Route Comparisons, simulated OCR, and Honest SOS Dispatch.
   ========================================================================== */

// --- Internationalization Dictionary ---
const i18n = {
  ar: {
    appName: "سَنَد",
    appSubtitle: "التنقل الميسّر",
    quickJump: "انتقال سريع:",
    liveBanner: "متصل بالشبكة — تحديث بيانات إمكانية الوصول مباشر",
    offlineBanner: "وضع عدم الاتصال — عرض البيانات المحفوظة فقط",
    sosButton: "طوارئ SOS",
    searchPlaceholder: "ابحث عن وجهة، مبنى، أو مرفق ميسّر...",
    frequentPlacesTitle: "الوجهات المتكررة",
    demoData: "بيانات تجريبية",
    placeHome: "المنزل",
    placeWork: "العمل",
    addPlace: "إضافة موقع",
    aiTitle: "المساعد البصري الذكي (OCR)",
    aiDesc: "قراءة النصوص، الوصفات، واللوحات بدون إنترنت",
    nearbyFacilitiesTitle: "مرافق ميسّرة قريبة (ضمن 500م)",
    facility1Name: "دورة مياه ميسّرة — المبنى الرئيسي",
    facility1Meta: "المكتبة المركزية • الدور الأرضي • 120 متر",
    badgeVerified: "✓ موثق (قبل يومين بواسطة المشرف)",
    btnNavigate: "توجيه",
    facility2Name: "مصعد ميسّر — مدخل محطة المترو B",
    facility2Meta: "شارع الملك فهد • 350 متر",
    badgeCommunity: "▲ بلاغ مجتمعي (اليوم)",
    facility3Name: "موقف سيارات ميسّر — بوابة الحديقة",
    facility3Meta: "المدخل الشمالي • 480 متر",
    badgeUnknown: "؟ حالة إمكانية الوصول غير مؤكدة",

    // Search
    filterAll: "الكل",
    filterRamps: "منحدرات مؤكدة",
    filterToilets: "دورات مياه ميسّرة",
    filterElevators: "مصاعد شغالة",
    recentSearches: "عمليات البحث الأخيرة",
    clearHistory: "مسح السجل",
    searchResultsTitle: "نتائج المقترحات",
    hist1Sub: "آخر زيارة قبل 3 أيام",
    hist2Sub: "آخر زيارة الأسبوع الماضي",
    result1Badge: "✓ مدخل ميسّر بمنحدر ومصعد (موثق)",
    result2Badge: "▲ بلاغ مجتمعي: منحدر متوفر، دورة مياه ميسّرة",
    result3Badge: "؟ حالة إمكانية الوصول غير مؤكدة",

    // Routes
    routeOptionsSub: "خيارات المسارات المتاحة",
    mapLegend: "خريطة تفاعلية: المسار الأخضر (عقبات أقل)",
    toggleMap: "تغيير حجم الخريطة",
    routeATag: "عقبات أقل مصرح بها",
    routeAName: "مسار A: طريق الحرم الجامعي الميسّر",
    unitMin: "دقيقة",
    unitMeter: "متر",
    lblEstTime: "الزمن المتوقع",
    lblDistance: "المسافة",
    lblBarriers: "العقبات المعروفة",
    valNoStairs: "بدون درج",
    evidenceTitle: "موثوقية البيانات والأدلة:",
    routeAEvidence: "✓ تم تأكيد وجود المنحدرات وخلو الطريق قبل يومين (تحديث المشرف).",
    viewDetails: "عرض التفاصيل ومصادر البيانات (توضيحي)",
    routeADetails: "• طبيعة الرصيف: خرسانة ناعمة ومستوية.<br>• أقصى انحدار متوقع: 3% (ضمن الحدود الميسّرة).<br>• حالة المصاعد: لا يتطلب استخدام مصعد.",
    btnStartNav: "ابدأ التوجيه المباشر (مسار A)",
    routeBTag: "توجد عقبات معروفة",
    routeBName: "مسار B: الطريق الشرقي المباشر",
    valStairs: "4 درج",
    routeBEvidence: "⚠️ يتضمن درج بدون منحدر عند شارع 12 (بلاغ مجتمعي غير مؤكد).",
    btnSelectRouteB: "اختيار مسار B (مع العلم بالعقبات)",

    // Nav
    turnDist: "بعد 50 متراً",
    turnAction: "انعطف يساراً نحو ممر الحرم الجامعي",
    headingUp: "اتجاه الحركة",
    northUp: "الشمال للأعلى",
    btnQuickMark: "تسجيل عقبة بنقرة واحدة (موقعك الحالي)",
    lblTimeLeft: "المتبقي",
    lblDistLeft: "المسافة",
    lblETA: "الوصول المتوقع",
    ctrlAudio: "صوت ناطق",
    ctrlAudioMuted: "مكتوم",
    ctrlRecenter: "إعادة التمركز",
    ctrlEndTrip: "إنهاء الرحلة",

    // Tabs
    tabHome: "الرئيسية",
    tabExplore: "استكشاف",
    tabReports: "البلاغات",
    tabProfile: "حسابي",

    // SOS Modal
    sosModalTitle: "طلب طوارئ واستغاثة (SOS)",
    sosStatusHeader: "حالة الموقع والشبكة الموفرة:",
    sosGPS: "إحداثيات الموقع الحالي:",
    sosAccuracy: "دقة GPS المقاسة:",
    sosNet: "حالة الاتصال:",
    netOnline: "متصل بالإنترنت",
    sosContactsTitle: "المستلمون المصرح لهم:",
    btnSendSOS: "إرسال تنبيه الطوارئ الآن",
    btnCancelSOS: "إلغاء والعودة",
    sosFootnote: "توضيح: عند عدم توفر إنترنت، سيعرض التطبيق سيناريو SMS احتياطياً [محاكاة] — لا يتم فتح تطبيق الرسائل الحقيقي في هذا النموذج التجريبي.",

    // OCR Modal
    aiModalTitle: "المساعد البصري الذكي (OCR)",
    ocrFrameTag: "وجه الكاميرا نحو النص أو الدواء",
    btnCaptureOCR: "📸 التقاط وقراءة النص",
    ocrWarnTitle: "⚠️ تنبيه سلامة هام (دقة القراءة 62%):",
    ocrWarnText: "هذه قراءة آلية تجريبية. تأكد شخصياً من اسم ومقدار جرعات الأدوية قبل تناولها.",
    btnPlayTTS: "▶️ قراءة صوتية",
    btnRescan: "🔄 مسح جديد",

    // Report Modal
    reportModalTitle: "إبلاغ عن عائق في الطريق",
    selectCategory: "اختر نوع العائق:",
    catRamp: "منحدر مسدود أو غير صالح",
    catElevator: "مصعد معطل عن العمل",
    catConstruction: "أعمال صيانة تعترض الرصيف",
    catStairs: "درج بدون منحدر بديل",
    repLocation: "موقع التقرير:",
    repAccuracy: "الدقة المقاسة:",
    btnSubmitReport: "إرسال البلاغ للتحقق المجتمعي",

    // End Nav Modal
    endNavTitle: "تأكيد إنهاء التوجيه",
    endNavDesc: "هل أنت تأكد من رغبتك في إنهاء رحلة التوجيه الحالية إلى المكتبة المركزية؟",
    btnResumeNav: "متابعة التوجيه",
    btnConfirmEnd: "إنهاء الرحلة",

    // ==========================================================================
    // NEW SCREENS: Obstacle Reporting (Full Screen)
    // ==========================================================================
    reportScreenTitle: "إبلاغ عن عائق",
    reportScreenSub: "ساعد في تحسين الطريق للجميع",
    reportLocationLabel: "موقع البلاغ (تلقائي):",
    reportAccuracyLabel: "دقة GPS المقاسة:",
    reportCategoryTitle: "نوع العائق",
    reportDetailsTitle: "تفاصيل إضافية",
    reportDescriptionLabel: "وصف العائق (اختياري):",
    reportDescriptionPlaceholder: "مثال: المنحدر مسدود بسيارة متوقفة، أو المصعد معطل منذ صباح اليوم...",
    reportSeverityLabel: "مستوى الخطورة:",
    reportPhotoLabel: "صورة العائق (اختياري):",
    attachPhoto: "إرفاق صورة",
    sevLow: "منخفض",
    sevLowDesc: "مرور ممكن بصعوبة",
    sevMedium: "متوسط",
    sevMedDesc: "يتطلب مسار بديل",
    sevHigh: "عالي",
    sevHighDesc: "ممر غير سالك تماماً",
    btnSubmitReportFull: "إرسال البلاغ للمراجعة المجتمعية",
    btnCancelReport: "إلغاء",
    reportSubmittedTitle: "تم إرسال البلاغ",
    reportSubmittedDesc: "شكراً لك! تم إضافة بلاغك إلى قائمة المراجعة المجتمعية. سيقوم المشرفون بالتحقق منه خلال 24-48 ساعة.",
    reportRefLabel: "الرقم المرجعي:",
    btnNewReport: "إبلاغ عن عائق آخر",

    // ==========================================================================
    // AI Scanner / Camera Viewfinder
    // ==========================================================================
    aiScannerTitle: "المساعد البصري",
    aiScannerSub: "OCR للغة العربية والإنجليزية — يعمل بلا إنترنت",
    scannerGuideText: "وجه الكاميرا نحو النص أو ملصق الدواء",
    modeDocument: "مستند",
    modeMedicine: "دواء",
    modeSign: "لوحة/علامة",
    processingText: "جاري تحليل النص...",
    processingSubtext: "نموذج CRNN INT8 يعمل محلياً على جهازك",
    previewTitle: "نص مكتشف",
    previewConfidence: "ثقة: 87% [Simulated]",
    btnDismissPreview: "متابعة المسح",
    btnViewDetails: "عرض التفاصيل والقراءة الصوتية",

    // ==========================================================================
    // OCR Result & Reader
    // ==========================================================================
    ocrResultTitle: "نتيجة القراءة",
    ocrResultSub: "مراجعة وتحرير النص المستخرج",
    ocrWarnTitle: "⚠️ تنبيه سلامة هام (دقة القراءة 62%):",
    ocrWarnText: "هذه قراءة آلية تجريبية. تأكد شخصياً من اسم ومقدار جرعات الأدوية قبل تناولها.",
    highConfidenceText: "دقة قراءة عالية: 94% — نص موثوق للمراجعة [Simulated]",
    extractedTextTitle: "النص المستخرج",
    ocrTextPlaceholder: "النص المستخرج سيظهر هنا...",
    btnCopy: "نسخ",
    btnEdit: "تحرير",
    btnTranslate: "ترجمة",
    parsedTitle: "معلومات الدواء المستخرجة",
    fieldName: "اسم الدواء:",
    fieldDosage: "الجرعة:",
    fieldFrequency: "التكرار:",
    fieldStorage: "التخزين:",
    parsedDisclaimer: "⚠️ استخراج آمي — راجع العبوة الأصلية والطبيب/الصيدلي للتأكيد.",
    ttsTitle: "القراءة الصوتية (TTS)",
    speedLabel: "السرعة:",
    btnPlayFull: "قراءة النص كاملاً",
    btnPause: "إيقاف مؤقت",
    btnStop: "إيقاف",
    speedSlow: "بطيئة (0.75x)",
    speedNormal: "عادية (1.0x)",
    speedFast: "سريعة (1.25x)",
    speedVeryFast: "سريعة جداً (1.5x)",
    btnRescan: "مسح جديد",
    btnSaveHistory: "حفظ في السجل",

    // ==========================================================================
    // SOS Emergency Full Screen
    // ==========================================================================
    sosScreenTitle: "طوارئ SOS",
    sosReadyTitle: "جاهز للإرسال",
    sosReadyDesc: "اضغط الزر الأحمر الكبير أدناه لإرسال تنبيه الطوارئ",
    sosStatusTitle: "معلومات الإرسال",
    sosGPS: "إحداثيات الموقع",
    sosAccuracy: "دقة GPS المقاسة",
    sosNet: "حالة الاتصال",
    sosTime: "وقت الطلب",
    sosContactsTitle: "المستلمون المصرح لهم",
    addContact: "إضافة جهة اتصال طوارئ",
    addContactDesc: "من إعدادات الحساب",
    sosBigButton: "إرسال تنبيه الطوارئ الآن",
    sosHoldHint: "اضغط مطولاً للتأكيد",
    sosFootnote: "توضيح: عند عدم توفر إنترنت، سيعرض التطبيق سيناريو SMS احتياطياً [محاكاة] — لا يتم فتح تطبيق الرسائل الحقيقي في هذا النموذج التجريبي.",
    dispatchSent: "تم إرسال التنبيه",
    btnOK: "حسناً، عودة للرئيسية",
    primaryContact: "المرافق الرئيسي",
    emergencyService: "خدمة طوارئ رسمية",
    systemContact: "نظامي",

    // ==========================================================================
    // Profile & Accessibility Settings
    // ==========================================================================
    profileTitle: "الملف الشخصي والإعدادات",
    profileSub: "تخصيص تجربة التنقل وإمكانية الوصول",
    profileRole: "مستخدم مسجل • خطة مجانية",
    accessibilityTitle: "إمكانية الوصول",
    fontSizeLabel: "حجم الخط",
    fontSizeDesc: "تكبير النص في جميع الشاشات",
    highContrastLabel: "التباين العالي",
    highContrastDesc: "ألوان عالية التباين للقراءة الأسهل",
    voiceGuidanceLabel: "التوجيه الصوتي",
    voiceGuidanceDesc: "تعليمات صوتية أثناء التوجيه",
    ttsSpeedLabel: "سرعة القراءة الصوتية (TTS)",
    ttsSpeedDesc: "ضبط سرعة النطق للنصوص الممسوحة",
    reduceMotionLabel: "تقليل الحركة",
    reduceMotionDesc: "تعطيل الرسوم المتحركة والانتقالات",
    screenReaderLabel: "دعم قارئ الشاشة",
    screenReaderDesc: "تحسين التسميات وترتيب التركيز",
    navPrefsTitle: "تفضيلات التوجيه",
    avoidStairsLabel: "تجنب الدرج افتراضياً",
    avoidStairsDesc: "إعطاء أولوية للمسارات بدون درجات",
    preferRampsLabel: "تفضيل المنحدرات",
    preferRampsDesc: "اختيار المسارات ذات المنحدرات المؤكدة",
    maxSlopeLabel: "أقصى انحدار مقبول",
    maxSlopeDesc: "تعيين حد الانحدار للمسارات المقترحة",
    slope3: "3% (معيار إمكانية الوصول)",
    slope5: "5%",
    slope8: "8%",
    slope10: "10%",
    mapOrientationLabel: "اتجاه الخريطة الافتراضي",
    mapOrientationDesc: "رأساً لحركة السير أو الشمال للأعلى",
    headingUp: "اتجاه الحركة",
    northUp: "النصف للأعلى",
    wakelockLabel: "إبقاء الشاشة مضاءة أثناء التوجيه",
    wakelockDesc: "منع قفل الشاشة أثناء الرحلة النشطة",
    dataPrivacyTitle: "البيانات والخصوصية",
    offlineMapsLabel: "خرائط بلا إنترنت",
    offlineMapsDesc: "تحميل الخرائط للمناطق المتكررة",
    btnManageOffline: "إدارة",
    dataSharingLabel: "مشاركة بيانات البلاغات مجهول الهوية",
    dataSharingDesc: "مساعدة تحسين الخرائط للمجتمع",
    locationHistoryLabel: "سجل المواقع المحفوظ",
    locationHistoryDesc: "إدارة وحذف سجل التنقل",
    btnManageHistory: "إدارة",
    deleteAccountLabel: "حذف الحساب",
    deleteAccountDesc: "إزالة جميع البيانات نهائياً",
    btnDeleteAccount: "حذف",
    emergencyContactsTitle: "جهات اتصال الطوارئ",
    btnAddEmergencyContact: "+ إضافة جهة اتصال طوارئ",
    appInfoTitle: "حول التطبيق",
    versionLabel: "الإصدار",
    buildLabel: "البناء",
    ocrModelLabel: "نموذج OCR",
    licenseLabel: "الترخيص",
    privacyPolicy: "سياسة الخصوصية",
    termsOfUse: "شروط الاستخدام",
    reportBug: "إبلاغ عن مشكلة"
  },
  en: {
    appName: "SANAD",
    appSubtitle: "Accessible Navigation",
    quickJump: "Quick Jump:",
    liveBanner: "Connected — Real-time accessibility data active",
    offlineBanner: "Offline Mode — Displaying cached data only",
    sosButton: "SOS Emergency",
    searchPlaceholder: "Search destination, facility, or street...",
    frequentPlacesTitle: "Frequent Places",
    demoData: "Demo Data",
    placeHome: "Home",
    placeWork: "Work",
    addPlace: "Add Place",
    aiTitle: "AI Visual Assistant (OCR)",
    aiDesc: "Read text, labels, and packaging offline",
    nearbyFacilitiesTitle: "Nearby Facilities (Within 500m)",
    facility1Name: "Accessible Restroom — Main Building",
    facility1Meta: "Central Library • Ground Floor • 120m away",
    badgeVerified: "✓ Verified (2 days ago by Admin)",
    btnNavigate: "Directions",
    facility2Name: "Accessible Elevator — Metro Gate B",
    facility2Meta: "King Fahd Road • 350m away",
    badgeCommunity: "▲ Community Report (Today)",
    facility3Name: "Accessible Parking — Park Gate",
    facility3Meta: "North Entrance • 480m away",
    badgeUnknown: "? Status Unknown",

    // Search
    filterAll: "All",
    filterRamps: "Verified Ramps",
    filterToilets: "Accessible Restrooms",
    filterElevators: "Working Elevators",
    recentSearches: "Recent Searches",
    clearHistory: "Clear History",
    searchResultsTitle: "Suggested Results",
    hist1Sub: "Visited 3 days ago",
    hist2Sub: "Visited last week",
    result1Badge: "✓ Verified ramped entrance & elevator",
    result2Badge: "▲ Community report: Ramp available, accessible toilet",
    result3Badge: "? Accessibility status unknown",

    // Routes
    routeOptionsSub: "Available Route Options",
    mapLegend: "Interactive Map: Green line (fewer barriers)",
    toggleMap: "Resize Map",
    routeATag: "Fewer Known Barriers",
    routeAName: "Route A: Accessible Campus Path",
    unitMin: "min",
    unitMeter: "m",
    lblEstTime: "Est. Time",
    lblDistance: "Distance",
    lblBarriers: "Known Barriers",
    valNoStairs: "No stairs",
    evidenceTitle: "Data Evidence & Confidence:",
    routeAEvidence: "✓ Ramp availability and clear path verified 2 days ago.",
    viewDetails: "View Data Sources & Details (Demo)",
    routeADetails: "• Surface: Smooth level concrete.<br>• Max slope: 3% (Accessible range).<br>• Elevators: None required.",
    btnStartNav: "Start Direct Guidance (Route A)",
    routeBTag: "Known Barriers Present",
    routeBName: "Route B: Direct East Path",
    valStairs: "4 steps",
    routeBEvidence: "⚠️ Contains 4 steps without ramp at St 12 (Community Report).",
    btnSelectRouteB: "Select Route B (Known Barriers)",

    // Nav
    turnDist: "In 50 Meters",
    turnAction: "Turn Left onto Campus Walk",
    headingUp: "Heading Up",
    northUp: "North Up",
    btnQuickMark: "1-Tap Quick Mark Obstacle (Current Pin)",
    lblTimeLeft: "Time Left",
    lblDistLeft: "Distance",
    lblETA: "Est. Arrival",
    ctrlAudio: "Voice Guide",
    ctrlAudioMuted: "Muted",
    ctrlRecenter: "Recenter",
    ctrlEndTrip: "End Trip",

    // Tabs
    tabHome: "Home",
    tabExplore: "Explore",
    tabReports: "Reports",
    tabProfile: "Profile",

    // SOS Modal
    sosModalTitle: "Emergency SOS Distress",
    sosStatusHeader: "Network & Location Dispatch Status:",
    sosGPS: "Current GPS Coordinates:",
    sosAccuracy: "Measured Accuracy:",
    sosNet: "Network Status:",
    netOnline: "Connected (Online)",
    sosContactsTitle: "Authorized Recipients:",
    btnSendSOS: "SEND EMERGENCY ALERT NOW",
    btnCancelSOS: "Cancel & Return",
    sosFootnote: "Note: If offline, app shows SMS fallback scenario [Simulated] — native Messages app does not open in this demo.",

    // OCR Modal
    aiModalTitle: "AI Visual Assistant (OCR)",
    ocrFrameTag: "Point camera at text or medicine bottle",
    btnCaptureOCR: "📸 Capture & Process Text",
    ocrWarnTitle: "⚠️ Important Safety Warning (Confidence 62%):",
    ocrWarnText: "This is a machine OCR reading. Verify prescription details and medical dosages visually before acting.",
    btnPlayTTS: "▶️ Read Aloud (TTS)",
    btnRescan: "🔄 Scan Again",

    // Report Modal
    reportModalTitle: "Report Route Obstacle",
    selectCategory: "Select Barrier Category:",
    catRamp: "Blocked or damaged ramp",
    catElevator: "Elevator out of service",
    catConstruction: "Sidewalk blocked / construction",
    catStairs: "Stairs without ramp alternative",
    repLocation: "Report Location:",
    repAccuracy: "Measured Accuracy:",
    btnSubmitReport: "Submit Report for Verification",

    // End Nav Modal
    endNavTitle: "Confirm Ending Navigation",
    endNavDesc: "Are you sure you want to end your active navigation session to Central Library?",
    btnResumeNav: "Resume Guidance",
    btnConfirmEnd: "End Navigation Session",

    // ==========================================================================
    // NEW SCREENS: Obstacle Reporting (Full Screen)
    // ==========================================================================
    reportScreenTitle: "Report Obstacle",
    reportScreenSub: "Help improve routes for everyone",
    reportLocationLabel: "Report Location (Auto):",
    reportAccuracyLabel: "Measured GPS Accuracy:",
    reportCategoryTitle: "Obstacle Type",
    reportDetailsTitle: "Additional Details",
    reportDescriptionLabel: "Obstacle Description (Optional):",
    reportDescriptionPlaceholder: "E.g.: Ramp blocked by parked car, or elevator out since this morning...",
    reportSeverityLabel: "Severity Level:",
    reportPhotoLabel: "Obstacle Photo (Optional):",
    attachPhoto: "Attach Photo",
    sevLow: "Low",
    sevLowDesc: "Passable with difficulty",
    sevMedium: "Medium",
    sevMedDesc: "Requires alternate route",
    sevHigh: "High",
    sevHighDesc: "Completely impassable",
    btnSubmitReportFull: "Submit Report for Community Review",
    btnCancelReport: "Cancel",
    reportSubmittedTitle: "Report Submitted",
    reportSubmittedDesc: "Thank you! Your report has been added to the community review queue. Admins will verify within 24-48 hours.",
    reportRefLabel: "Reference #:",
    btnNewReport: "Report Another Obstacle",

    // ==========================================================================
    // AI Scanner / Camera Viewfinder
    // ==========================================================================
    aiScannerTitle: "AI Visual Assistant",
    aiScannerSub: "Arabic/English OCR — Works Offline",
    scannerGuideText: "Point camera at text or medicine label",
    modeDocument: "Document",
    modeMedicine: "Medicine",
    modeSign: "Sign/Label",
    processingText: "Processing text...",
    processingSubtext: "INT8 CRNN model running locally on device",
    previewTitle: "Detected Text",
    previewConfidence: "Confidence: 87% [Simulated]",
    btnDismissPreview: "Continue Scanning",
    btnViewDetails: "View Details & Read Aloud",

    // ==========================================================================
    // OCR Result & Reader
    // ==========================================================================
    ocrResultTitle: "OCR Result",
    ocrResultSub: "Review & Edit Extracted Text",
    ocrWarnTitle: "⚠️ Important Safety Warning (Confidence 62%):",
    ocrWarnText: "This is an automated demo reading. Verify prescription details and medical dosages visually before acting.",
    highConfidenceText: "High Confidence: 94% — Reliable text for review [Simulated]",
    extractedTextTitle: "Extracted Text",
    ocrTextPlaceholder: "Extracted text will appear here...",
    btnCopy: "Copy",
    btnEdit: "Edit",
    btnTranslate: "Translate",
    parsedTitle: "Extracted Medication Info",
    fieldName: "Medication Name:",
    fieldDosage: "Dosage:",
    fieldFrequency: "Frequency:",
    fieldStorage: "Storage:",
    parsedDisclaimer: "⚠️ Automated extraction — Verify with original packaging and pharmacist/doctor.",
    ttsTitle: "Text-to-Speech (TTS)",
    speedLabel: "Speed:",
    btnPlayFull: "Read Full Text",
    btnPause: "Pause",
    btnStop: "Stop",
    speedSlow: "Slow (0.75x)",
    speedNormal: "Normal (1.0x)",
    speedFast: "Fast (1.25x)",
    speedVeryFast: "Very Fast (1.5x)",
    btnRescan: "Scan Again",
    btnSaveHistory: "Save to History",

    // ==========================================================================
    // SOS Emergency Full Screen
    // ==========================================================================
    sosScreenTitle: "SOS Emergency",
    sosReadyTitle: "Ready to Send",
    sosReadyDesc: "Press the large red button below to send emergency alert",
    sosStatusTitle: "Dispatch Information",
    sosGPS: "GPS Coordinates",
    sosAccuracy: "Measured GPS Accuracy",
    sosNet: "Network Status",
    sosTime: "Request Time",
    sosContactsTitle: "Authorized Recipients",
    addContact: "Add Emergency Contact",
    addContactDesc: "From Account Settings",
    sosBigButton: "SEND EMERGENCY ALERT NOW",
    sosHoldHint: "Long press to confirm",
    sosFootnote: "Note: If offline, app shows SMS fallback scenario [Simulated] — native Messages app does not open in this demo.",
    dispatchSent: "Alert Dispatched",
    btnOK: "OK, Return to Home",
    primaryContact: "Primary Companion",
    emergencyService: "Official Emergency Service",
    systemContact: "System",

    // ==========================================================================
    // Profile & Accessibility Settings
    // ==========================================================================
    profileTitle: "Profile & Settings",
    profileSub: "Customize navigation & accessibility experience",
    profileRole: "Registered User • Free Plan",
    accessibilityTitle: "Accessibility",
    fontSizeLabel: "Font Size",
    fontSizeDesc: "Scale text across all screens",
    highContrastLabel: "High Contrast",
    highContrastDesc: "High contrast colors for easier reading",
    voiceGuidanceLabel: "Voice Guidance",
    voiceGuidanceDesc: "Spoken instructions during navigation",
    ttsSpeedLabel: "TTS Speech Rate",
    ttsSpeedDesc: "Adjust speech speed for scanned text",
    reduceMotionLabel: "Reduce Motion",
    reduceMotionDesc: "Disable animations and transitions",
    screenReaderLabel: "Screen Reader Support",
    screenReaderDesc: "Improve labels and focus order",
    navPrefsTitle: "Navigation Preferences",
    avoidStairsLabel: "Avoid Stairs by Default",
    avoidStairsDesc: "Prioritize routes without steps",
    preferRampsLabel: "Prefer Ramps",
    preferRampsDesc: "Select routes with verified ramps",
    maxSlopeLabel: "Max Acceptable Slope",
    maxSlopeDesc: "Set slope limit for suggested routes",
    slope3: "3% (Accessibility Standard)",
    slope5: "5%",
    slope8: "8%",
    slope10: "10%",
    mapOrientationLabel: "Default Map Orientation",
    mapOrientationDesc: "Heading-Up or North-Up",
    headingUp: "Heading Up",
    northUp: "North Up",
    wakelockLabel: "Keep Screen On During Navigation",
    wakelockDesc: "Prevent screen lock during active trip",
    dataPrivacyTitle: "Data & Privacy",
    offlineMapsLabel: "Offline Maps",
    offlineMapsDesc: "Download maps for frequent areas",
    btnManageOffline: "Manage",
    dataSharingLabel: "Share Anonymous Report Data",
    dataSharingDesc: "Help improve maps for the community",
    locationHistoryLabel: "Saved Location History",
    locationHistoryDesc: "Manage and delete navigation history",
    btnManageHistory: "Manage",
    deleteAccountLabel: "Delete Account",
    deleteAccountDesc: "Remove all data permanently",
    btnDeleteAccount: "Delete",
    emergencyContactsTitle: "Emergency Contacts",
    btnAddEmergencyContact: "+ Add Emergency Contact",
    appInfoTitle: "About App",
    versionLabel: "Version",
    buildLabel: "Build",
    ocrModelLabel: "OCR Model",
    licenseLabel: "License",
    privacyPolicy: "Privacy Policy",
    termsOfUse: "Terms of Use",
    reportBug: "Report a Bug"
  }
};

// --- Application State ---
let currentLang = 'ar';
let activeScreenId = 'scr-home';
let isAudioMuted = false;
let isHeadingUp = true;
let isMapCollapsed = false;
let selectedRoute = 'a';
let currentNavigationDestination = 'المكتبة المركزية';
let ttsSpeed = 1.0;

// --- Initialization ---
document.addEventListener('DOMContentLoaded', () => {
  setLanguage('ar');
  setupNavMarkers();
});

// --- Language Switcher ---
function setLanguage(lang) {
  currentLang = lang;
  document.documentElement.lang = lang;
  document.documentElement.dir = (lang === 'ar') ? 'rtl' : 'ltr';

  // Toggle active button UI
  document.getElementById('btn-lang-ar').classList.toggle('active', lang === 'ar');
  document.getElementById('btn-lang-en').classList.toggle('active', lang === 'en');

  // Update text content for elements with data-i18n
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (i18n[lang][key]) {
      el.innerHTML = i18n[lang][key];
    }
  });

  // Update placeholders
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const key = el.getAttribute('data-i18n-placeholder');
    if (i18n[lang][key]) {
      el.placeholder = i18n[lang][key];
    }
  });
}

// Override navigateTo to handle new screens
function navigateTo(screenId) {
  // Cleanup SOS button if leaving SOS screen
  if (activeScreenId === 'scr-sos' && screenId !== 'scr-sos') {
    cleanupSOSButton();
  }

  activeScreenId = screenId;

  // Update active screen visibility
  document.querySelectorAll('.app-screen').forEach(screen => {
    screen.classList.remove('active');
  });
  const targetScreen = document.getElementById(screenId);
  if (targetScreen) {
    targetScreen.classList.add('active');
  }

  // Update Quick Jump buttons
  document.querySelectorAll('.jump-btn').forEach(btn => {
    btn.classList.toggle('active', btn.getAttribute('data-screen') === screenId);
  });

  // Update Bottom Tab selection
  document.querySelectorAll('.nav-tab').forEach(tab => {
    tab.classList.toggle('active', tab.getAttribute('data-target') === screenId);
  });

  // Initialize screen-specific logic
  switch (screenId) {
    case 'scr-report':
      initializeReportScreen();
      resetReportForm();
      break;
    case 'scr-ai-scanner':
      resetScannerView();
      break;
    case 'scr-ocr-result':
      populateOCRResult();
      break;
    case 'scr-sos':
      // Reset SOS screen state
      document.querySelector('.sos-main-action').classList.remove('hidden');
      document.querySelector('.sos-fallback-info').classList.remove('hidden');
      document.getElementById('sos-dispatch-full').classList.add('hidden');
      // Initialize SOS button long-press detection
      initializeSOSButton();
      break;
    case 'scr-profile':
      initializeProfileScreen();
      break;
  }
}

// --- Search Screen Logic ---
function onSearchQueryChange(query) {
  const clearBtn = document.getElementById('btn-clear-input');
  clearBtn.style.display = query.length > 0 ? 'block' : 'none';

  const cards = document.querySelectorAll('#search-results-container .result-card');
  cards.forEach(card => {
    const title = card.querySelector('.result-title').innerText.toLowerCase();
    const address = card.querySelector('.result-address').innerText.toLowerCase();
    const match = title.includes(query.toLowerCase()) || address.includes(query.toLowerCase());
    card.style.display = match ? 'flex' : 'none';
  });
}

function clearSearchInput() {
  const input = document.getElementById('dest-search-input');
  input.value = '';
  onSearchQueryChange('');
  input.focus();
}

function toggleFilter(btnElement, category) {
  document.querySelectorAll('.filter-chip').forEach(chip => chip.classList.remove('active'));
  btnElement.classList.add('active');

  const cards = document.querySelectorAll('#search-results-container .result-card');
  cards.forEach(card => {
    if (category === 'all') {
      card.style.display = 'flex';
    } else {
      const cardCats = card.getAttribute('data-category') || '';
      card.style.display = cardCats.includes(category) ? 'flex' : 'none';
    }
  });
}

function selectDestination(name) {
  currentNavigationDestination = name;
  document.getElementById('route-dest-display').innerText = name;
  navigateTo('scr-routes');
}

function selectQuickDestination(name) {
  selectDestination(name);
}

function clearSearchHistory() {
  document.getElementById('history-list').innerHTML = `<li class="history-item"><span class="hist-title">${currentLang === 'ar' ? 'تم مسح السجل' : 'History Cleared'}</span></li>`;
  showToast(currentLang === 'ar' ? 'تم مسح سجل البحث' : 'Search history cleared');
}

// --- Route Selection Screen Logic ---
function toggleMapHeight() {
  isMapCollapsed = !isMapCollapsed;
  const container = document.getElementById('mini-map-box');
  container.classList.toggle('collapsed', isMapCollapsed);
}

function selectRouteCard(type) {
  selectedRoute = type;
  document.getElementById('route-card-a').classList.toggle('selected', type === 'a');
  document.getElementById('route-card-b').classList.toggle('selected', type === 'b');
}

function startNavigation(routeName) {
  showToast((currentLang === 'ar' ? 'بدء التوجيه المباشر: ' : 'Starting direct guidance: ') + routeName);
  navigateTo('scr-nav');
}

// --- Active Navigation Logic ---
function toggleCompassMode() {
  isHeadingUp = !isHeadingUp;
  const labelEl = document.getElementById('compass-label');
  const iconEl = document.getElementById('compass-icon');

  if (isHeadingUp) {
    labelEl.innerText = i18n[currentLang].headingUp;
    iconEl.innerText = '🧭';
    showToast(currentLang === 'ar' ? 'وضع الخريطة: اتجاه الحركة' : 'Map Mode: Heading-Up');
  } else {
    labelEl.innerText = i18n[currentLang].northUp;
    iconEl.innerText = '⬆️';
    showToast(currentLang === 'ar' ? 'وضع الخريطة: الشمال للأعلى' : 'Map Mode: North-Up');
  }
}

function toggleAudioMute() {
  isAudioMuted = !isAudioMuted;
  const iconEl = document.getElementById('audio-icon');
  const labelEl = document.getElementById('audio-label');

  if (isAudioMuted) {
    iconEl.innerText = '🔇';
    labelEl.innerText = i18n[currentLang].ctrlAudioMuted;
    showToast(currentLang === 'ar' ? 'تم كتم الصوت الناطق' : 'Voice guidance muted');
  } else {
    iconEl.innerText = '🔊';
    labelEl.innerText = i18n[currentLang].ctrlAudio;
    showToast(currentLang === 'ar' ? 'تم تفعيل الصوت الناطق' : 'Voice guidance active');
  }
}

function triggerQuickObstacleMark() {
  showToast(currentLang === 'ar'
    ? '✓ تم حفظ العلامة في قائمة المراجعة بعد الرحلة (الدقة: ±6.8م)'
    : '✓ Quick Mark saved to Post-Trip review queue (Acc: ±6.8m)'
  );
}

function recenterNavMap() {
  showToast(currentLang === 'ar' ? 'تم إعادة تجميع المركز على موقعك الحالي' : 'Map recentered on current GPS fix');
}

function confirmEndTrip() {
  document.getElementById('modal-end-nav').classList.add('active');
}

function closeEndNavModal() {
  document.getElementById('modal-end-nav').classList.remove('active');
}

function executeEndTrip() {
  closeEndNavModal();
  showToast(currentLang === 'ar' ? 'تم إنهاء رحلة التوجيه بنجاح' : 'Navigation session ended');
  navigateTo('scr-home');
}

// --- Simulated Animated Nav Marker ---
function setupNavMarkers() {
  const userMarker = document.getElementById('user-nav-marker');
  if (!userMarker) return;

  let posIndex = 0;
  const points = [
    {x: 180, y: 220},
    {x: 180, y: 190},
    {x: 180, y: 160},
    {x: 180, y: 130},
    {x: 180, y: 110},
    {x: 150, y: 110},
    {x: 120, y: 110},
    {x: 90, y: 110}
  ];

  setInterval(() => {
    if (activeScreenId === 'scr-nav') {
      posIndex = (posIndex + 1) % points.length;
      const pt = points[posIndex];
      userMarker.setAttribute('transform', `translate(${pt.x}, ${pt.y})`);
    }
  }, 2500);
}

// --- SOS Emergency Full Screen ---

// Long press detection for SOS button - 3-second requirement with full event handling
let sosLongPressActive = false;
let sosLongPressTimer = null;
let sosButtonElement = null;

function initializeSOSButton() {
  sosButtonElement = document.getElementById('btn-sos-massive');
  if (!sosButtonElement) return;

  // Use pointer events for unified handling (mouse, touch, pen)
  const startLongPress = (e) => {
    // Only respond to primary button (left click / single touch)
    if (e.button !== undefined && e.button !== 0) return;
    if (sosLongPressActive) return; // Prevent duplicate
    sosLongPressActive = true;

    // Visual feedback - button pressed state
    sosButtonElement.classList.add('sos-pressing');

    // Start 3-second (3000ms) timer
    sosLongPressTimer = setTimeout(() => {
      sosLongPressActive = false;
      sosButtonElement.classList.remove('sos-pressing');
      openSOSConfirmation();
    }, 3000);
  };

  const endLongPress = (e) => {
    if (!sosLongPressActive) return;
    clearTimeout(sosLongPressTimer);
    sosLongPressTimer = null;
    sosLongPressActive = false;
    sosButtonElement.classList.remove('sos-pressing');
  };

  // Pointer events (unified mouse/touch/pen)
  sosButtonElement.addEventListener('pointerdown', startLongPress, { passive: true });
  sosButtonElement.addEventListener('pointerup', endLongPress);
  sosButtonElement.addEventListener('pointercancel', endLongPress);
  sosButtonElement.addEventListener('pointerleave', endLongPress);
  sosButtonElement.addEventListener('lostpointercapture', endLongPress);

  // Also set pointer capture to ensure we get pointerup even if finger moves off button
  sosButtonElement.addEventListener('pointerdown', (e) => {
    if (e.button !== undefined && e.button !== 0) return;
    sosButtonElement.setPointerCapture(e.pointerId);
  }, { passive: true });

  // Prevent context menu on long press
  sosButtonElement.addEventListener('contextmenu', (e) => e.preventDefault());
}

function cleanupSOSButton() {
  if (sosButtonElement) {
    // Clear any pending timer
    if (sosLongPressTimer) {
      clearTimeout(sosLongPressTimer);
      sosLongPressTimer = null;
    }
    sosLongPressActive = false;
    sosButtonElement.classList.remove('sos-pressing');

    // Remove event listeners by cloning (nuclear option for cleanup)
    const newBtn = sosButtonElement.cloneNode(true);
    sosButtonElement.parentNode.replaceChild(newBtn, sosButtonElement);
    sosButtonElement = newBtn;

    // Re-initialize with new element
    initializeSOSButton();
  }
}

function openSOSConfirmation() {
  executeSOSDispatchFull();
}

function executeSOSDispatchFull() {
  const feedback = document.getElementById('sos-dispatch-full');
  const icon = document.getElementById('dispatch-icon');
  const title = document.getElementById('dispatch-title');
  const detail = document.getElementById('dispatch-detail');
  const mode = document.getElementById('dispatch-mode');
  const recipients = document.getElementById('dispatch-recipients');

  // Hide main button, show feedback
  document.querySelector('.sos-main-action').classList.add('hidden');
  document.querySelector('.sos-fallback-info').classList.add('hidden');
  feedback.classList.remove('hidden');

  // Update time
  const now = new Date();
  document.getElementById('sos-request-time').innerText = now.toLocaleTimeString() + ' <span class="demo-tag">[Simulated]</span>';

  if (navigator.onLine) {
    icon.innerText = '✅';
    title.innerText = i18n[currentLang].dispatchSent;
    detail.innerHTML = currentLang === 'ar'
      ? 'تم استلام طلب التنبيه من الخادم التجريبي بنجاح. <span class="demo-tag">[محاكاة: استلام API تجريبي]</span>'
      : 'Alert request received by test server successfully. <span class="demo-tag">[Simulated: Demo API ACK]</span>';
    mode.innerHTML = currentLang === 'ar'
      ? '📡 <strong>طريقة الإرسال:</strong> واجهة برمجة تطبيقات الطوارئ (API) — <em>استلام مؤكد من خادم تجريبي فقط</em> <span class="demo-tag">[Simulated]</span>'
      : '📡 <strong>Dispatch Method:</strong> Emergency API — <em>Demo server ACK only (not real dispatch)</em> <span class="demo-tag">[Simulated]</span>';
    recipients.innerHTML = currentLang === 'ar'
      ? '👥 <strong>المستلمون (تجريبي):</strong> محمد الكيالي (SMS + Push)، خدمات الطوارئ التجريبية 999 (SMS) — <em>لم يتم إخطار أي جهات اتصال حقيقية</em>'
      : '👥 <strong>Recipients (Demo):</strong> Mohammed Al-Kayyali (SMS + Push), Demo Emergency 999 (SMS) — <em>No real contacts notified</em>';
  } else {
    icon.innerText = '📱';
    title.innerText = currentLang === 'ar' ? 'وضع عدم الاتصال — محاكاة SMS' : 'Offline Mode — SMS Simulation';
    detail.innerHTML = currentLang === 'ar'
      ? 'لا يوجد اتصال بالإنترنت. في النسخة الإنتاجية، سيفتح تطبيق الرسائل النصية (SMS) لإكمال الإرسال. <span class="demo-tag">[محاكاة: سيناريو SMS الاحتياطي]</span>'
      : 'No internet connection. In production, native SMS composer would open to complete dispatch. <span class="demo-tag">[Simulated: SMS Fallback Scenario]</span>';
    mode.innerHTML = currentLang === 'ar'
      ? '📱 <strong>طريقة الإرسال (محاكاة):</strong> رسائل نصية أصلية (SMS Fallback) — <em>يتطلب_confirmation يدوي في تطبيق الرسائل بالنسخة الحقيقية</em> <span class="demo-tag">[Simulated]</span>'
      : '📱 <strong>Dispatch Method (Simulated):</strong> Native SMS Fallback — <em>Requires manual confirmation in Messages app (production only)</em> <span class="demo-tag">[Simulated]</span>';
    recipients.innerHTML = currentLang === 'ar'
      ? '👥 <strong>المستلمون (تجريبي):</strong> سيتم تعبئة أرقام تجريبية في تطبيق الرسائل'
      : '👥 <strong>Recipients (Demo):</strong> Demo numbers would be pre-filled in Messages app';
  }
}

function closeSOSFullScreen() {
  // Reset and go home
  document.querySelector('.sos-main-action').classList.remove('hidden');
  document.querySelector('.sos-fallback-info').classList.remove('hidden');
  document.getElementById('sos-dispatch-full').classList.add('hidden');
  navigateTo('scr-home');
}

// ==========================================================================
// NEW SCREEN: OBSTACLE REPORTING (SCR-07) - Full Screen
// ==========================================================================

let selectedCategory = null;
let selectedSeverity = 'low';
let attachedPhoto = null;

function initializeReportScreen() {
  const grid = document.getElementById('category-grid');
  if (!grid) return;

  const categories = [
    { id: 'ramp', icon: '🛣️', nameKey: 'catRamp', descKey: '' },
    { id: 'elevator', icon: '🛗', nameKey: 'catElevator', descKey: '' },
    { id: 'construction', icon: '🚧', nameKey: 'catConstruction', descKey: '' },
    { id: 'stairs', icon: '🪜', nameKey: 'catStairs', descKey: '' }
  ];

  grid.innerHTML = categories.map(cat => `
    <button class="category-card" data-category="${cat.id}" onclick="selectCategory('${cat.id}')">
      <span class="category-icon">${cat.icon}</span>
      <span class="category-name" data-i18n="${cat.nameKey}">${i18n[currentLang][cat.nameKey]}</span>
      <span class="category-desc" data-i18n="${cat.descKey}"></span>
    </button>
  `).join('');
}

function selectCategory(catId) {
  selectedCategory = catId;
  document.querySelectorAll('.category-card').forEach(card => {
    card.classList.toggle('selected', card.getAttribute('data-category') === catId);
  });
}

function selectSeverity(sev) {
  selectedSeverity = sev;
  document.querySelectorAll('.severity-btn').forEach(btn => {
    btn.classList.toggle('active', btn.getAttribute('data-severity') === sev);
  });
}

function simulatePhotoAttach() {
  // Simulate photo attachment
  attachedPhoto = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjMwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZTJlOGYwIi8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIxOCIgZmlsbD0iIzk0YTNiOCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZHk9Ii4zZW0iPuKAoOq1rCA8L3RleHQ+PC9zdmc+';
  const preview = document.getElementById('photo-preview');
  const img = document.getElementById('attached-photo');
  img.src = attachedPhoto;
  preview.classList.remove('hidden');
  document.querySelector('.btn-photo-attach').style.display = 'none';
  showToast(currentLang === 'ar' ? 'تم إرفاق صورة تجريبية' : 'Demo photo attached [Simulated]');
}

function removeAttachedPhoto() {
  attachedPhoto = null;
  document.getElementById('photo-preview').classList.add('hidden');
  document.querySelector('.btn-photo-attach').style.display = 'flex';
}

function refreshGPSLocation() {
  showToast(currentLang === 'ar' ? 'جاري تحديث موقع GPS... [محاكاة]' : 'Refreshing GPS location... [Simulated]');
  setTimeout(() => {
    showToast(currentLang === 'ar' ? 'تم تحديث الموقع: ±6.8م [محاكاة]' : 'Location updated: ±6.8m [Simulated]');
  }, 1000);
}

function submitObstacleReportFull() {
  if (!selectedCategory) {
    showToast(currentLang === 'ar' ? 'يرجى اختيار نوع العائق أولاً' : 'Please select an obstacle category first');
    return;
  }

  const description = document.getElementById('report-description').value;
  const refNum = Math.floor(1000 + Math.random() * 9000);

  // Show confirmation
  document.querySelector('.report-actions').classList.add('hidden');
  document.querySelectorAll('.section-container').forEach(s => s.classList.add('hidden'));
  document.querySelector('.location-confirm-banner').classList.add('hidden');
  document.getElementById('submission-confirmation').classList.remove('hidden');
  document.getElementById('report-ref-num').innerText = refNum;

  // Changed: explicitly simulated submission toast
  showToast(currentLang === 'ar' ? 'تم إرسال البلاغ تجريبياً! رقم مرجعي: SND-20241123-' + refNum : 'Report submitted (Demo)! Ref: SND-20241123-' + refNum);
}

function resetReportForm() {
  selectedCategory = null;
  selectedSeverity = 'low';
  attachedPhoto = null;

  document.querySelectorAll('.category-card').forEach(c => c.classList.remove('selected'));
  document.querySelectorAll('.severity-btn').forEach(b => b.classList.toggle('active', b.getAttribute('data-severity') === 'low'));
  document.getElementById('report-description').value = '';
  removeAttachedPhoto();

  document.querySelector('.report-actions').classList.remove('hidden');
  document.querySelectorAll('.section-container').forEach(s => s.classList.remove('hidden'));
  document.querySelector('.location-confirm-banner').classList.remove('hidden');
  document.getElementById('submission-confirmation').classList.add('hidden');
}

// ==========================================================================
// NEW SCREEN: AI SCANNER / CAMERA VIEWFINDER (SCR-05)
// ==========================================================================

let scannerMode = 'document';
let isFlashOn = false;

function openAIScanner() {
  navigateTo('scr-ai-scanner');
  resetScannerView();
}

function closeAIScanner() {
  navigateTo('scr-home');
  resetScannerView();
}

function resetScannerView() {
  document.getElementById('scanner-viewfinder').classList.remove('hidden');
  document.getElementById('processing-overlay').classList.add('hidden');
  document.getElementById('scanner-result-preview').classList.add('hidden');
  document.getElementById('detected-regions').classList.add('hidden');
}

function setScannerMode(mode) {
  scannerMode = mode;
  document.querySelectorAll('.mode-tab').forEach(btn => {
    btn.classList.toggle('active', btn.getAttribute('data-mode') === mode);
  });
}

function toggleFlashlight() {
  isFlashOn = !isFlashOn;
  const icon = document.getElementById('flash-icon');
  icon.innerText = isFlashOn ? '🔦' : '🔦';
  // Clearly label as simulated - no real flashlight
  showToast(currentLang === 'ar'
    ? (isFlashOn ? 'تم تفعيل الفلاش [محاكاة]' : 'تم إيقاف الفلاش [محاكاة]')
    : (isFlashOn ? 'Flashlight ON [Simulated]' : 'Flashlight OFF [Simulated]'));
}

function openGalleryForOCR() {
  showToast(currentLang === 'ar' ? 'فتح المعرض للاختيار [محاكاة]' : 'Opening gallery for OCR [Simulated]');
  // Simulate picking an image and processing
  setTimeout(() => captureOCRFromScanner(), 500);
}

function captureOCRFromScanner() {
  // Show processing
  document.getElementById('scanner-viewfinder').classList.add('hidden');
  document.getElementById('processing-overlay').classList.remove('hidden');

  // Simulate processing delay
  setTimeout(() => {
    document.getElementById('processing-overlay').classList.add('hidden');
    showScannerPreview();
  }, 2000);
}

function showScannerPreview() {
  const preview = document.getElementById('scanner-result-preview');
  const confidence = Math.floor(75 + Math.random() * 20); // 75-94%
  const isLowConfidence = confidence < 80;

  document.getElementById('preview-confidence').innerHTML = `ثقة: ${confidence}% <span class="demo-tag">[Simulated]</span>`;
  document.getElementById('preview-text').innerText = scannerMode === 'medicine'
    ? (currentLang === 'ar' ? 'مثال: حبة واحدة مرتين يومياً بعد الطعام. يحفظ في مكان بارد وجاف.' : 'Example: Take 1 tablet twice daily after meals. Store in cool dry place.')
    : (currentLang === 'ar' ? 'مخرج طوارئ — اتجه يساراً للممر الرئيسي' : 'Emergency Exit — Turn left for main corridor');

  preview.classList.remove('hidden');
}

function dismissPreview() {
  document.getElementById('scanner-result-preview').classList.add('hidden');
  document.getElementById('scanner-viewfinder').classList.remove('hidden');
  document.getElementById('detected-regions').classList.remove('hidden');
}

function navigateToOCRResult() {
  dismissPreview();
  navigateTo('scr-ocr-result');
  populateOCRResult();
}

// ==========================================================================
// NEW SCREEN: OCR RESULT & READER (SCR-06)
// ==========================================================================

let ttsPlaying = false;
let ttsPaused = false;
let ttsProgress = 0;
let ttsInterval = null;

// Flag to track if medicine mode was last
let lastScannerMode = 'document';

// Function to add demo badge to medication info
function applyDemoBadgeToMedCard() {
  const medCard = document.getElementById('medication-parsed-card');
  if (medCard) {
    // Remove existing badges to avoid duplicates
    const existingBadge = medCard.querySelector('.demo-badge');
    if (existingBadge) existingBadge.remove();

    const badge = document.createElement('span');
    badge.className = 'demo-badge';
    badge.innerText = '[Demo]';
    badge.style.fontSize = '0.65em';
    badge.style.color = '#9C5200';
    badge.style.marginLeft = '4px';
    badge.style.background = '#FEF7E0';
    badge.style.padding = '2px 6px';
    badge.style.borderRadius = '3px';
    medCard.querySelector('h4').appendChild(badge);
  }
}

function populateOCRResult() {
  lastScannerMode = scannerMode;
  // Set text based on scanner mode
  const textArea = document.getElementById('ocr-extracted-text');
  const warningBanner = document.getElementById('ocr-safety-warning');
  const highConfBanner = document.getElementById('confidence-banner-high');
  const medCard = document.getElementById('medication-parsed-card');

  if (scannerMode === 'medicine') {
    textArea.value = currentLang === 'ar'
      ? 'مثال: تناول حبة واحدة مرتين يومياً بعد الطعام. يحفظ في مكان بارد وجاف بعيداً عن أشعة الشمس.'
      : 'Example: Take 1 tablet twice daily after meals. Store in cool dry place away from sunlight.';
    warningBanner.classList.remove('hidden');
    highConfBanner.classList.add('hidden');
    medCard.classList.remove('hidden');
    populateMedicationParsed();
    applyDemoBadgeToMedCard();
  } else {
    textArea.value = currentLang === 'ar'
      ? 'مخرج طوارئ — اتجه يساراً للممر الرئيسي. المسافة 50 متر. اللوحة مضيئة وموثقة.'
      : 'Emergency Exit — Turn left for main corridor. Distance 50m. Sign is illuminated and verified.';
    warningBanner.classList.add('hidden');
    highConfBanner.classList.remove('hidden');
    medCard.classList.add('hidden');
  }

  // Reset TTS state
  ttsPlaying = false;
  ttsPaused = false;
  ttsProgress = 0;
  updateTTSUI();
}

function populateMedicationParsed() {
  // Fictional/demo medication text - clearly labeled as simulated
  const fictionalName = currentLang === 'ar' ? 'مادة شبية (Simulated Example)' : 'Fictional Substance (Simulated Example)';
  const fictionalDosage = currentLang === 'ar' ? '100 مجم (مثال)' : '100mg (Example)';
  const fictionalFrequency = currentLang === 'ar' ? 'مرة واحدة يومياً (مثال)' : 'Once daily (Example)';
  const fictionalStorage = currentLang === 'ar' ? 'مكان بارد وجاف (مثال)' : 'Cool dry place (Example)';

  document.getElementById('parsed-name').innerText = fictionalName;
  document.getElementById('parsed-dosage').innerText = fictionalDosage;
  document.getElementById('parsed-frequency').innerText = fictionalFrequency;
  document.getElementById('parsed-storage').innerText = fictionalStorage;
  showToast(currentLang === 'ar' ? '⚠️ Text is fictional demo data [محاكاة]' : '⚠️ Text is fictional demo data [Simulated]');
}

function playFullTTSSpeech() {
  if (ttsPaused) {
    // Resume
    ttsPaused = false;
    ttsPlaying = true;
  } else {
    // Start new
    ttsPlaying = true;
    ttsPaused = false;
  }
  updateTTSUI();
  startTTSProgress();
  showToast(currentLang === 'ar' ? '▶️ جاري القراءة الصوتية... [محاكاة]' : '▶️ Reading aloud... [Simulated]');
}

function pauseTTSSpeech() {
  ttsPaused = true;
  ttsPlaying = false;
  clearInterval(ttsInterval);
  updateTTSUI();
  showToast(currentLang === 'ar' ? '⏸️ تم إيقاف القراءة مؤقتاً' : '⏸️ Speech paused');
}

function stopTTSSpeech() {
  ttsPlaying = false;
  ttsPaused = false;
  ttsProgress = 0;
  clearInterval(ttsInterval);
  updateTTSUI();
  showToast(currentLang === 'ar' ? '⏹️ تم إيقاف القراءة' : '⏹️ Speech stopped');
}

function startTTSProgress() {
  clearInterval(ttsInterval);
  const duration = 5000 / ttsSpeed; // 5 seconds base
  const startTime = Date.now() - (ttsProgress * duration);

  ttsInterval = setInterval(() => {
    ttsProgress = Math.min(1, (Date.now() - startTime) / duration);
    updateTTSProgress();

    if (ttsProgress >= 1) {
      clearInterval(ttsInterval);
      ttsPlaying = false;
      ttsProgress = 0;
      updateTTSUI();
    }
  }, 100);
}

function updateTTSUI() {
  const playBtn = document.getElementById('btn-tts-play');
  const pauseBtn = document.getElementById('btn-tts-pause');
  const playIcon = document.getElementById('tts-play-icon');
  const playLabel = document.getElementById('tts-play-label');

  if (ttsPlaying) {
    playBtn.classList.add('hidden');
    pauseBtn.classList.remove('hidden');
  } else {
    playBtn.classList.remove('hidden');
    pauseBtn.classList.add('hidden');
    playIcon.innerText = ttsPaused ? '▶️' : '▶️';
    playLabel.innerText = ttsPaused
      ? (currentLang === 'ar' ? 'متابعة القراءة' : 'Resume Reading')
      : (currentLang === 'ar' ? 'قراءة النص كاملاً' : 'Read Full Text');
  }
}

function updateTTSProgress() {
  const fill = document.getElementById('tts-progress-fill');
  const timeEl = document.getElementById('tts-progress-time');
  if (fill) fill.style.width = (ttsProgress * 100) + '%';
  if (timeEl) {
    const total = 5;
    const current = total * ttsProgress;
    timeEl.innerText = formatTime(current) + ' / ' + formatTime(total);
  }
}

function formatTime(seconds) {
  const m = Math.floor(seconds / 60);
  const s = Math.floor(seconds % 60);
  return `${m}:${s.toString().padStart(2, '0')}`;
}

function setTTSSpeed(speed) {
  ttsSpeed = speed;
  document.querySelectorAll('.speed-btn').forEach(btn => {
    btn.classList.toggle('active', parseFloat(btn.getAttribute('data-speed')) === speed);
  });
  if (ttsPlaying) {
    startTTSProgress(); // Continue progress with new speed
  }
}

function copyOCRText() {
  const text = document.getElementById('ocr-extracted-text').value;
  navigator.clipboard.writeText(text).then(() => {
    showToast(currentLang === 'ar' ? '✓ تم نسخ النص إلى الحافظة' : '✓ Text copied to clipboard');
  });
}

function editOCRText() {
  const textArea = document.getElementById('ocr-extracted-text');
  textArea.readOnly = !textArea.readOnly;
  document.getElementById('btn-edit-text').innerHTML = textArea.readOnly
    ? '<span>✏️</span> <span data-i18n="btnEdit">تحرير</span>'
    : '<span>✓</span> <span data-i18n="btnDone">تم</span>';
  showToast(currentLang === 'ar' ? (textArea.readOnly ? 'تم إلغاء التحرير' : 'يمكنك الآن تحرير النص') : (textArea.readOnly ? 'Editing cancelled' : 'Text is now editable'));
}

function translateOCRText() {
  showToast(currentLang === 'ar' ? 'جاري الترجمة... [محاكاة]' : 'Translating... [Simulated]');
  setTimeout(() => {
    showToast(currentLang === 'ar' ? 'تم الترجمة [محاكاة]' : 'Translation complete [Simulated]');
  }, 800);
}

function rescanFromResult() {
  navigateTo('scr-ai-scanner');
  resetScannerView();
}

function saveToHistory() {
  showToast(currentLang === 'ar' ? '✓ تم الحفظ في سجل المسح [محاكاة]' : '✓ Saved to scan history [Simulated]');
}

function shareOCRResult() {
  showToast(currentLang === 'ar' ? 'مشاركة النتيجة... [محاكاة]' : 'Sharing result... [Simulated]');
}

// ==========================================================================
// NEW SCREEN: PROFILE & ACCESSIBILITY SETTINGS (SCR-09)
// ==========================================================================

let fontSizeScale = 1.0;

// Apply demo badge to settings toggles that are UI demos only
function applyDemoBadges() {
  // Add [Demo UI] badges to non-functional setting labels
  const demoToggles = document.querySelectorAll('.toggle-switch input');
  demoToggles.forEach(input => {
    const label = input.nextElementSibling;
    if (label && label.classList.contains('toggle-slider')) {
      // Check if this toggle already has a demo badge
      if (!label.querySelector('.demo-badge')) {
        const badge = document.createElement('span');
        badge.className = 'demo-badge-small';
        badge.innerText = '[Demo UI]';
        badge.style.fontSize = '0.65em';
        badge.style.color = '#6B7280';
        badge.style.marginLeft = '4px';
        badge.style.background = '#F3F4F6';
        badge.style.padding = '2px 6px';
        badge.style.borderRadius = '3px';
        badge.style.display = 'inline-block';
        label.appendChild(badge);
      }
    }
  });
}

function adjustFontSize(delta) {
  fontSizeScale = Math.max(0.8, Math.min(1.5, fontSizeScale + delta * 0.1));
  applyFontSize();
  updateFontSizeUI();
}

function applyFontSize() {
  document.documentElement.style.fontSize = (15 * fontSizeScale) + 'px';
  const fill = document.getElementById('font-size-fill');
  const thumb = document.getElementById('font-size-thumb');
  const pct = Math.round(((fontSizeScale - 0.8) / 0.7) * 100);
  if (fill) fill.style.width = pct + '%';
  if (thumb) thumb.style.left = 'calc(' + pct + '% - 9px)';
}

function updateFontSizeUI() {
  const val = document.getElementById('font-size-value');
  if (val) val.innerText = Math.round(fontSizeScale * 100) + '%';
}

function toggleHighContrast() {
  const enabled = document.getElementById('toggle-high-contrast').checked;
  document.body.classList.toggle('high-contrast', enabled);
  showToast(currentLang === 'ar'
    ? (enabled ? 'تم تفعيل التباين العالي' : 'تم إلغاء التباين العالي')
    : (enabled ? 'High contrast enabled' : 'High contrast disabled'));
}

function toggleVoiceGuidance() {
  const enabled = document.getElementById('toggle-voice-guidance').checked;
  showToast(currentLang === 'ar'
    ? (enabled ? 'تم تفعيل التوجيه الصوتي' : 'تم إلغاء التوجيه الصوتي')
    : (enabled ? 'Voice guidance enabled' : 'Voice guidance disabled'));
}

function setTTSSetting(value) {
  ttsSpeed = parseFloat(value);
  showToast(currentLang === 'ar'
    ? 'تم تعيين سرعة القراءة إلى ' + value + 'x'
    : 'TTS speed set to ' + value + 'x');
}

function toggleReduceMotion() {
  const enabled = document.getElementById('toggle-reduce-motion').checked;
  document.body.classList.toggle('reduce-motion', enabled);
  showToast(currentLang === 'ar'
    ? (enabled ? 'تم تفعيل تقليل الحركة' : 'تم إلغاء تقليل الحركة')
    : (enabled ? 'Reduce motion enabled' : 'Reduce motion disabled'));
}

function toggleScreenReaderSupport() {
  const enabled = document.getElementById('toggle-screen-reader').checked;
  showToast(currentLang === 'ar'
    ? (enabled ? 'تم تفعيل دعم قارئ الشاشة' : 'تم إلغاء دعم قارئ الشاشة')
    : (enabled ? 'Screen reader support enabled' : 'Screen reader support disabled'));
}

function toggleAvoidStairs() {
  const enabled = document.getElementById('toggle-avoid-stairs').checked;
  showToast(currentLang === 'ar'
    ? (enabled ? 'سيتم تجنب الدرج في المسارات' : 'لن يتم تجنب الدرج افتراضياً')
    : (enabled ? 'Stairs will be avoided in routes' : 'Stairs no longer avoided by default'));
}

function togglePreferRamps() {
  const enabled = document.getElementById('toggle-prefer-ramps').checked;
  showToast(currentLang === 'ar'
    ? (enabled ? 'سيتم تفضيل المنحدرات المؤكدة' : 'لن يتم تفضيل المنحدرات')
    : (enabled ? 'Verified ramps will be preferred' : 'Ramps no longer preferred'));
}

function setMaxSlope(value) {
  showToast(currentLang === 'ar'
    ? 'تم تعيين أقصى انحدار مقبول: ' + value + '%'
    : 'Max acceptable slope set to: ' + value + '%');
}

function setDefaultMapMode(mode) {
  document.querySelectorAll('.segment-btn').forEach(btn => {
    btn.classList.toggle('active', btn.getAttribute('data-mode') === mode);
  });
  showToast(currentLang === 'ar'
    ? (mode === 'heading' ? 'الافتراضي: اتجاه الحركة' : 'الافتراضي: الشمال للأعلى')
    : (mode === 'heading' ? 'Default: Heading-Up' : 'Default: North-Up'));
}

function toggleWakelock() {
  const enabled = document.getElementById('toggle-wakelock').checked;
  showToast(currentLang === 'ar'
    ? (enabled ? 'ستبقى الشاشة مضاءة أثناء التوجيه' : 'الشاشة قد تقفل أثناء التوجيه')
    : (enabled ? 'Screen will stay on during navigation' : 'Screen may lock during navigation'));
}

function toggleDataSharing() {
  const enabled = document.getElementById('toggle-data-sharing').checked;
  showToast(currentLang === 'ar'
    ? (enabled ? 'تم تفعيل مشاركة البيانات مجهولة الهوية' : 'تم إلغاء مشاركة البيانات')
    : (enabled ? 'Anonymous data sharing enabled' : 'Anonymous data sharing disabled'));
}

function initializeProfileScreen() {
  // Apply current settings to UI
  applyFontSize();
  updateFontSizeUI();

  // Session storage for user settings (persisted during session)
  const savedHighContrast = sessionStorage.getItem('high-contrast');
  const savedReduceMotion = sessionStorage.getItem('reduce-motion');
  const savedVoiceGuidance = sessionStorage.getItem('voice-guidance');
  const savedScreenReader = sessionStorage.getItem('screen-reader');
  const savedAvoidStairs = sessionStorage.getItem('avoid-stairs');
  const savedPreferRamps = sessionStorage.getItem('prefer-ramps');

  if (savedHighContrast !== null) {
    document.getElementById('toggle-high-contrast').checked = savedHighContrast === 'true';
    document.body.classList.toggle('high-contrast', savedHighContrast === 'true');
  }
  if (savedReduceMotion !== null) {
    document.getElementById('toggle-reduce-motion').checked = savedReduceMotion === 'true';
    document.body.classList.toggle('reduce-motion', savedReduceMotion === 'true');
  }
  if (savedVoiceGuidance !== null) {
    document.getElementById('toggle-voice-guidance').checked = savedVoiceGuidance === 'true';
  }
  if (savedScreenReader !== null) {
    document.getElementById('toggle-screen-reader').checked = savedScreenReader === 'true';
  }
  if (savedAvoidStairs !== null) {
    document.getElementById('toggle-avoid-stairs').checked = savedAvoidStairs === 'true';
  }
  if (savedPreferRamps !== null) {
    document.getElementById('toggle-prefer-ramps').checked = savedPreferRamps === 'true';
  }

  // Apply demo badges after setting state
  applyDemoBadges();

  // Set TTS speed selector
  const ttsSelect = document.getElementById('tts-speed-setting');
  if (ttsSelect) ttsSelect.value = ttsSpeed.toString();
}

// ==========================================================================
// NAVIGATION INTEGRATION FOR NEW SCREENS
// ==========================================================================

// Bottom tab navigation for new tabs
document.addEventListener('DOMContentLoaded', () => {
  // Reports tab now navigates to full screen
  const reportsTab = document.querySelector('.nav-tab[data-target="scr-reports"]');
  if (reportsTab) {
    reportsTab.setAttribute('data-target', 'scr-report');
    reportsTab.onclick = () => navigateTo('scr-report');
  }

  // Profile tab now navigates to full screen
  const profileTab = document.querySelector('.nav-tab[data-target="scr-profile"]');
  if (profileTab) {
    profileTab.onclick = () => navigateTo('scr-profile');
  }

  // Initialize profile screen if it's the active screen
  if (activeScreenId === 'scr-profile') {
    initializeProfileScreen();
  }
});