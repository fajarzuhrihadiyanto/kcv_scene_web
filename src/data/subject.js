export const SUBJECT = [
    {
        title: 'Kecerdasan Buatan',
        mandatory: true,
        description: `Pada matakuliah ini, mahasiswa akan belajar tentang intelligent agent baik secara teori di kelas maupun praktek melalui tugas project. Intelligent agent akan memanfaatkan algoritma pencarian (search), algoritma berbasis pengetahuan (knowledge-based) serta algoritma pembelajaran (learningbased.) Algoritma search yang dipelajari antara lain algoritma uninformed/informed search, heuristic search, adversarial search danalgoritma search untukconstraint satisfaction problem. Sedangkan algoritma berbasis pengetahuan meliputi representasi serta inference propositional logic, first order logic, reasoning under uncertainty. Untuk algoritma yang berbasis pembelajaran, di mata kuliah ini akan dibahas tentang algoritma statistical learning. Selain teori, di dalam kuliah ini akan disampaikan studi kasus dalam bentuk tugas project yang berkaitan dengan intelligent agent yang memanfaatkan algoritma pencarian, algoritma berbasis pengetahuan atau algoritma statistical learning. Tugas project dapat dikerjakan secara individu maupun secara berkelompok, sehingga mahasiswa memiliki pengalaman belajar dan mampu berfikir secara kritis tentang penerapan intelligent agent.`,
        objective: [
            `Mahasiswa menguasai konsep kecerdasan buatan, intelligent agent serta mengidentifikasi problem yang dapat diselesaikan dengan memanfaatkan intelligent agent`,
            `Mahasiswa mampu menjelaskan, mengidentifikasi, merancang dan menerapkan intelligent agent dengan memanfaatkan algoritma pencarian yang meliputi uninformed search, informed search, heuristic search, adversarial search serta algoritma search untuk Constraint Satisfaction Problem`,
            `Mahasiswa mampu menjelaskan, merancang dan menerapkan knowledge-based intelligent agent dengan merepresentasikan KB menjadi propositional logic atau first order logic serta memanfaatkan algoritma resolution, forward dan backward chaining untuk melakukan proses inference.`,
            `Mahasiswa mampu menjelaskan, merancang dan menerapkan first order logic untuk merepresentasikan aspek action, space, time dan mental event menggunakan ontology dan reasoning yang sesuai.`,
            `Mahasiswa mampu menjelaskan, merancang dan menerapkan intelligent agent untuk problem yang berada dalam kondisi ketidak pastian menggunakan bayesian network dan probabilistic reasoning.`,
            `Mahasiswa mampu menjelaskan, merancang dan menerapkan intelligent agent yang memanfaatkan algoritma statistical learning.`
        ]
    },
    {
        title: 'Kecerdasan Komputational',
        mandatory: true,
        description: `Pada mata kuliah ini mahasiswa belajar tentang metode klasifikasi, metode clustering, metode optimasi, fuzzy logic serta kombinasi metode-metode tersebut. Melalui pembahasan teoritis di kelas serta penerapan studi kasus dalam bentuk tugas proyek, mahasiswa akan memiliki pengalaman untuk membuat sistem cerdas dengan pembelajaran yang terawasi berdasarkan metode klasifikasi (Decision Tree, SVM, Jaringan Syaraf Tiruan), membuat sistem cerdas berdasarkan pembelajaran tidak terawasi berdasarkan metode clustering (K-Means, Hierarchical Clustering, SOM), membuat sistem cerdas menggunakan logika Fuzzy, membuat sistem cerdas berdasarkan metode optimasi (GA, PSO, ACO), serta membuat sistem cerdas yang mengkombinasikan metode-metode tersebut. Tugas proyek dapat dikerjakan baik secara individu maupun berkelompok`,
        objective: [
            `Mahasiswa mampu menjelaskan klasifier dengan fungsi diskriminan linier maupun non-linier, Perceptron, Support Vector Machine (SVM).`,
            `Mahasiswa mampu menjelaskan Fuzzy Logic dan penggunaannya dalam sistem berbasis aturan, contoh sistem kontroler.`,
            `Mahasiswa mampu menjelaskan Decision Tree dan pembentukan strukturnya yang optimal serta terjadinya overfitting.`,
            `Mahasiswa mampu menerapkan metode yang sudah dibahas seperti SVM, Fuzzy Logic, dan Decision Tree, dalam suatu aplikasi.`,
            `Mahasiswa mampu menjelaskan berbagai metode clustering dan penggunaannya.`,
            `Mahasiswa mampu menjelaskan metode jaringan saraf tiruan dengan algoritma Backpropagation, non-linearly separable problems, neurofuzzy, dan SOM.`,
            `Mahasiswa mampu menerapkan metode clustering dan jaringan saraf tiruan dalam suatu aplikasi.`,
            `Mahasiswa mampu menjelaskan metode optimasi dengan evolutionary algorithm: Genetic Algorithm (GA), Ant Colony (ACO), Particle Swarm Optimization (PSO).`
        ]
    },
    {
        title: 'Data Mining',
        mandatory: false,
        description: `Pada mata kuliah ini mahasiswa akan mempelajari tentang proses pencarian pola dan relasi dari berbagai perspektif di suatu dataset dengan memanfaatkan metode-metode kecerdasan komputasional. Pola dan relasi yang ditemukan akan diolah menjadi informasi yang bermanfaat untuk mendukung pengambilan keputusan atau penyelesaian suatu masalah.`,
        objective: [
            `Mahasiswa mengetahuitentang bermacam-macam tipe data dan beberapa sumber data (database, warehouse, transaksional, WWW)`,
            `Mahasiswa memahami konsep dan mampu menerapkan teknik preprosesing data.`,
            `Mahasiswa mampu membuat sistem untuk penggalian data dan analisa pola data dengan menerapkan metode-metode kecerdasan komputasional dan metode probabilistik.`,
            `Mahasiswa mampu menganalisi dan menyelesaikan suatu permasalahan dalam suatu studi kasus dengan memanfaatkan sistem penggalian data`,
        ]
    },
    {
        title: 'Pengolahan Citra Digital',
        mandatory: false,
        description: `Pada mata kuliah ini mahasiswa belajar tentang konsep persepsi visual, citra digital keabuan dan citra berwarna serta citra biner, teknik perbaikan dan restorasi citra, transformasi diskrit Fourier dan wavelet, transformasi Hough, zooming. Selanjutnya mahasiswa mempelajari proses segmentasi, metode ekstraksi fitur sebagai deskriptor citra, metode morfologi, pencocokan templet, encoding dan decoding. Mahasiswa menerapkan teknik-teknik yang dipelajari dalam tugas proyek baik secara individu maupun berkelompok.`,
        objective: [
            `Mahasiswa mampu menjelaskan persepsi visual dan definisi citra digital.`,
            `Mahasiswa mampu menjelaskan perbaikan citra untuk meningkatkan kontras atau untuk melakukan pemfilteran dengan berbagai metode dalam domain spasial.`,
            `Mahasiswa mampu menjelaskan transformasi dan pemfilteran citra dalam domain frekuensi, wavelet, dan transformasi Hough.`,
            `Mahasiswa mampu menjelaskan dasar-dasar warna, pengolahan citra berwarna, dan pseudo color.`,
            `Mahasiswa mampu menjelaskan proses restorasi citra untuk memperbaiki citra yang terdegradasi secara visual atau registrasi citra secara geometris dan proses zooming.`,
            `Mahasiswa mampu menerapkan pengolahan citra digital untuk visualisasi dan menganalisa hasilnya.`,
            `Mahasiswa mampu menjelaskan metode segmentasi dengan berbagai metode, baik yang berbasis batas tepi, nilai batas ambang, dan daerah.`,
            `Mahasiswa mampu menjelaskan konsep representasi dan deskripsi serta metode ektraksi fitur sebagai deskriptor citra, serta metode pencocokan templet.`,
            `Mahasiswa mampu menjelaskan metode morfologi untuk pengolahan citra terutama citra biner.`,
            `Mahasiswa mampu menjelaskan proses encoding dan decoding citra serta dasar kompresi citra.`,
            `Mahasiswa mampu menerapkan pengolahan citra digital untuk segmentasi dan deskripsi fitur serta menganalisa hasilnya`,
        ]
    },
    {
        title: 'Komputasi Biomedik',
        mandatory: false,
        description: `Melalui mata kuliah ini mahasiswa akan mempelajari komputasi yang diaplikasikan di bidangbiomedik. Pada mata kuliah ini, mahasiswa akan belajar mengenai berbagai macam format dan sifat data-data biomedik seperti data hasil lab, data sinyal (ECG, EEG), data citra medis (X-Ray, MRI, USG, Patologi) dan data gen (DNA, Microarray, protein). Data-data tersebut akan dianalisis dan dimodelkan menggunakan metode-metode statistik dan machine learning untuk menjawab permasalahan-permasalahan di bidang biomedik`,
        objective: [
            `Mahasiswa mampu mengidentifikasi permasalahan di bidang biomedik`,
            `Mahasiswa mampu menganalisis permasalahan biomedik berdasarkan data-data biomedik yang tersedia.`,
            `Mahasiswa mampu merancang dan mengimplementasikan metodemetode statistik dan machine learning untuk memodelkan solusi di bidang biomedik.`,
        ]
    },
    {
        title: 'Robotika',
        mandatory: false,
        description: `Pada matakuliah robotika ini, mahasiswa mempelajari konsep robot, macammacam robot, komponen-komponen robot dan cara kerjanya, mempelajari cara merakit robot dan pemrograman pada robot, memahami tipe-tipe pergerakan robot dan cara mengaplikasikannya, memanfaatkan dan mengaplikasikan berbagai sensor robot, dan mengaplikasikan metode-metode sistem cerdas pada aplikasi robot untuk menyelesaikan berbagai tantangan.`,
        objective: [
            `Mahasiswa memahami konsep, macam-macam robot, komponen-komponen robot dan cara kerjanya.`,
            `Mahasiswa mampu merakit robot.`,
            `Mahasiswa mampu memahami pemrograman robot.`,
            `Mahasiswa memahami tipe-tipe pergerakan robot dan cara mengaplikasikannya.`,
            `Mahasiswa mampu memanfaatkan dan mengaplikasikan berbagai sensor robot.`,
            `Mahasiswa mampu mengaplikasikan metode-metode sistem cerdas pada robot.`
        ]
    },
    {
        title: 'Sistem Temu Kembali Informasi',
        mandatory: false,
        description: `Mahasiswa akan mempelajari teknik-teknik pengolahan data teks untuk menemukan kembali informasi pada data berbentuk teks. Bahasan perkuliahan meliputi pengolahan awal, ekstraksi fitur, penghitungan tingkat kemiripan teks sesuai masukan query, dan menampilkan hasil pencarian. Bahasan lanjut adalah teknik relevance feedback, klasifikasi dan klasterisasi teks untuk membantu pengguna dalam pencarian. Mahasiswa akan merancang, menganalisis serta mengaplikasikan metode-metode sistem temu kembali informasi pada berbagai permasalahan nyata baik secara mandiri atau kerjasama tim`,
        objective: [
            `Mahasiswa mampu menjelaskan berbagai konsep, teori, istilah dalam berbagai macam model sistem temu kembali informasi beserta pengaplikasiannya`,
            `Mahasiswa mengimplementasikan teknik-teknik penyelesaian masalah seperti pengindeksan, pencarian, pemrosesan query dalam kebutuhan temu kembali informasi.`
        ]
    },
    {
        title: 'Visi Komputer',
        mandatory: false,
        description: `Visi komputer bertujuan untuk mendapatkan informasi dan mengambil sebuah keputusan dari sebuah atau sekumpulan citra yang diobservasi. Visi komputer menggabungkan konsep-konsep dari ‘pengolahan citra’ dan ‘kecerdasan komputasional’. Visi komputer memiliki sejumlah aplikasi yang beragam, antara lain aplikasi medis, pengawasan (seperti pengenalan wajah), inspeksi industri, pencitraan satelit, dll. Mata kuliah ini berisi topik-topik seperti ekstraksi fitur, segmentasi dan pengenalan objek. Selain itu juga berisi tentang kalibrasi kamera, geometri projektif, dan bagaimana informasi tiga dimensi dapat direkonstruksi dari sebuah citra, citra stereo dan motion.`,
        objective: [
            `Mahasiswa mampu menjelaskan permasalahan-permasalahan visi komputer dalam tulisan.`,
            `Mahasiswa mampu membuat MATLAB code untuk memecahkan permasalahan-permasalahan visi komputer.`,
            `Mahasiswa mampu menjelaskan teori-teori dan prinsip-prinsip dalam visi komputer.`,
            `Mahasiswa mampu melakukan riset mandiri pada topik tertentu, menulis laporan riset dengan ruang lingkup kecil, dan mempresentasikannya secara lisan.`,
            `Mahasiswa mampu mengkritisi berbagai metode untuk memecahkan permasalahan-permasalahan visi komputer.`,
        ]
    },
    {
        title: 'Analisis Jejaring Sosial',
        mandatory: false,
        description: `Mahasiswa akan mempelajari teknik analisis data dari media jejaring sosial (twitter, facebook, blog, dll) untuk menghasilkan informasi terkait perilaku serta kebiasaan pengguna suatu komunitas dalam contoh permasalahan nyata.Hasil analisa berupa kuantitatif dan kualitatif meliputi ekstraksitopikdiskusi, pengenalan mood dansentimen (positif/ negatif) pengguna, pengukuran evaluasi efektivitas suatu program media jejaring sosial, hubungan antar pengguna dalam komunitas, eksplorasi hasil berbentuk grafik/ statistik/ tabel, dll. Informasi hasil analisa dapat dimanfaatkan sebagai umpanbalik atau pertimbangan penyusunan suatu kebijakan/ pendukung keputusan.`,
        objective: [
            `Mahasiswa mampu menjelaskan berbagai konsep, teori, istilah dalam teknik analisis data dari media jejaring sosial`,
            `Mahasiswa mampu melakukan pengumpulan data dari situs jejaring sosial`,
            `Mahasiswa mampu melakukan analisa jejaring sosial menggunakan data set standar dengan kakas bantu`,
            `Mahasiswa mampu merancang dan mengimplementasikan analisa jejaring social pada suatu permasalahan nyata secara mandiri atau kerjasama tim`,
        ]
    },
    {
        title: 'Deep Learning',
        mandatory: false,
        description: `Dalam mata kuliah ini mahasiswa mempelajari teori, prinsip dan teknik pembelajaran “dalam” dan menerapkannya pada penyelesaian permasalahan real world yang mencakup pembelajaran moda tunggal, moda banyak, maupun model generative. Mahasiswa juga mempelajari bagaimana penerapan deep learning pada berbagai aplikasi, seperti klasifikasi citra, men-generate keterangan pada data citra/video/suara, translasi bahasa, men-generate model untuk keperluan simulasi/perencanaan.`,
        objective: [
            `Mahasiswa mampu menjelaskan tentang teori, prinsip, dan berbagai model deep learning.`,
            `Mahasiswa mampu menggunakan model deep learning yang sesuai untuk menyelesaikan berbagai permasalahan learning, seperti single modal learning, multimodal learning, dan generative model learning.`,
            `Mahasiswa mampu membuat program untuk menyelesaikan suatu permasalahan real world menggunakan algoritma deep learning yang sesuai.`,
            `Mahasiswa mampu melakukan riset mandiri pada topik tertentu, menulis laporan riset dengan ruang lingkup kecil, dan mempresentasikannya secara lisan.`,
            `Mahasiswa mampu mengkritisi berbagai metode untuk memecahkan permasalahan real world menggunakan deep learning.`
        ]
    },
]