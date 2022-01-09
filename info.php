<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>

    <link rel="icon" href="assets/img/favicon.ico">
    <link rel="stylesheet" href="assets/css/style-info.css">
    <link rel="stylesheet" href="assets/css/style-main.css">
</head>
<body>
    <div class="container">
        <div class="view-container">
            <div class="line"><br></div>
            <?php 

            $fasilkom = [ 
                [ 
                    'source_img' => 'assets/img/ruang fasilkom.jpg', 
                    'nama_fasilitas' => 'Ruang Belajar FASILKOM', 
                    'desc_fasilitas' => 'Fakultas Ilmu Komputer Universitas Indo Global Mandiri (Fasilkom UIGM) deselenggarakan berdasarkan SK Mendiknas RI No, . 83/D/O/2008 tanggal 22 Mei 2008., merupakan cikal bakal berdirinya UIGM. Berbagai program studi yang terdapat pada fakultas ilmu computer adalah Sistem Informasi (S1),Teknik Informatika (S1),Sistem Komputer (S1),Manajemen Informatika (D3)', 
                    'link_fasilitas' => 'https://jannah-prds.github.io/virtualtour.github.io/tour_fasilkom/' 
                ], 
                [ 
                    'source_img' => 'assets/img/perpus.jpg', 
                    'nama_fasilitas' => 'Ruang Perpustakaan', 
                    'desc_fasilitas' => 'Sebagai tempat menimba ilmu pengetahuan, Universitas Indo Global Mandiri menyediakan perpustakaan yang dilengkapi dengan beberapa buku yang terdiri dari buku literatur baik dalam bahasa Indonesia maupun bahasa Inggris, majalah, jurnal ilmiah serta buku ilmu pengetahuan lainnya', 
                    'link_fasilitas' => 'https://jannah-prds.github.io/virtualtour.github.io/tour_perpus' 
                ], 
                [ 
                    'source_img' => 'assets/img/lab ilkom.jpg', 
                    'nama_fasilitas' => 'Ruang Belajar Labolatorium',  
                    'desc_fasilitas' => 'Laboratorium sangat diperlukan untuk menunjang proses belajar mengajar, di Universitas Indo Global Mandiri, terdapat beberapa Laboratorium, diantaranya salah satu diantaranya adalah Lab.komputer dan  lab jaringan komputer.', 
                    'link_fasilitas' => 'https://jannah-prds.github.io/virtualtour.github.io/tour_fasilkom' 
                ], 
            ];

            $fe = [
                [ 
                    'source_img' => 'assets/img/ruang fe.jpg', 
                    'nama_fasilitas' => 'Ruang Fakultas Ekonomi', 
                    'desc_fasilitas' => 'Kenyamanan dan Ketenangan adalah salah faktor pendukung dalam kelancaran proses belajar mengajar, untuk itu Universitas Indo Global Mandiri menyediakan seluruh ruang kuliah full AC dan dilengkapi dengan peralatan yang sangat menunjang diantaranya LCD Projektor, OHP, Sentral Sound System, Komputer & Video Presenter dan lainnya.', 
                    'link_fasilitas' => 'https://jannah-prds.github.io/virtualtour.github.io/tour_bersama' 
                ], 
                [ 
                    'source_img' => 'assets/img/ruang serbaguna.jpg', 
                    'nama_fasilitas' => 'Ruang Serbaguna', 
                    'desc_fasilitas' => 'Sebagai sarana penunjang kegiatan proses belajar dan mengajar Universitas Indo Global Mandiri juga memiliki Aula serbaguna dengan daya tampung 1000 orang, yang dilengkapi dengan fasilitas full AC, Sound System, LCD Projektor, dan berbagai macam sarana pendukung. Aula serbaguna dapat dimanfaatkan sebagai tempat Seminar, Workshop atau kegiatan-kegiatan lainnya.', 
                    'link_fasilitas' => 'https://jannah-prds.github.io/virtualtour.github.io/tour_aula/' 
                ], 
                [ 
                    'source_img' => 'assets/img/ruang prodi fe.jpg', 
                    'nama_fasilitas' => 'Ruang Prodi Fakultas Ekonomi', 
                    'desc_fasilitas' => 'Ruang dosen memiliki tempat duduk atau meja tersendiri setiap meja tercantum nama dosen yang bersangkutan, ruang dosen masing masing program studi terletak di gedung C. Fakultas Ekonomi memiliki beberapa prodi diantaranya Manajemen (S1), Akuntansi (S1) danMagister Manajemen (S2)', 
                    'link_fasilitas' => 'https://jannah-prds.github.io/virtualtour.github.io/tour_fe' 
                ],
            ];

            $fipb = [
                [ 
                    'source_img' => 'assets/img/ruang fipb.jpg', 
                    'nama_fasilitas' => 'Ruang Fakultas Ilmu Pemerintahan dan Budaya', 
                    'desc_fasilitas' => 'Kenyamanan dan Ketenangan adalah salah faktor pendukung dalam kelancaran proses belajar mengajar, untuk itu Universitas Indo Global Mandiri menyediakan seluruh ruang kuliah full AC dan dilengkapi dengan peralatan yang sangat menunjang diantaranya LCD Projektor, OHP, Sentral Sound System, Komputer & Video Presenter dan lainnya.
                    program studi yang terdapat pada Fakultas Ilmu Pemerintahan & Budaya adalah, Desain Komunikasi Visual (S1) dan Study Pemerintahan (S1)
                    ', 
                    'link_fasilitas' => 'https://jannah-prds.github.io/virtualtour.github.io/tour_fipb/' 
                ],
                [ 
                    'source_img' => 'assets/img/runag teater.png', 
                    'nama_fasilitas' => 'Ruang Teater', 
                    'desc_fasilitas' => 'Sarana penunjang kegiatan proses belajar dan mengajar Universitas Indo Global Mandiri juga memiliki ruang teater yang dilengkapi dengan fasilitas full AC, Sound System, LCD Projektor, dan berbagai macam sarana pendukung. Ruang teater dapat dimanfaatkan sebagai tempat Seminar, Workshop atau kegiatan-kegiatan lainnya.', 
                    'link_fasilitas' => 'https://jannah-prds.github.io/virtualtour.github.io/tour_teater' 
                ],
                [ 
                    'source_img' => 'assets/img/global radio.jpg', 
                    'nama_fasilitas' => 'Radio Kampus Global FM', 
                    'desc_fasilitas' => 'Salah satu hasil karya Mahasiswa Universitas Indo Global Mandiri yang dapat diimplementasikan di Kampus adalah Global FM Radio dengan frekuensi 107.3 MHz, bertempat di Kampus A Universitas Indo Global Mandiri. (UIGM).', 
                    'link_fasilitas' => 'https://jannah-prds.github.io/virtualtour.github.io/tour_radio' 
                ],
            ];

            $ft = [
                [ 
                    'source_img' => 'assets/img/teknik.jpg', 
                    'nama_fasilitas' => 'Ruang Fakultas Teknik', 
                    'desc_fasilitas' => 'Kenyamanan dan Ketenangan adalah salah faktor pendukung dalam kelancaran proses belajar mengajar, untuk itu Universitas Indo Global Mandiri menyediakan seluruh ruang kuliah full AC dan dilengkapi dengan peralatan yang sangat menunjang diantaranya LCD Projektor, OHP, Sentral Sound System, Komputer & Video Presenter dan lainnya.
                    Fakultas Teknik memiliki beberapa program studi yaitu Teknik Sipil (S1),Arsitektur (S1),Survei Dan Pemetaan (D3),Perencanaan Wilayah Dan Kota (S1) dan Keselamatan Dan Kesehatan Kerja (K3)
                    ', 
                    'link_fasilitas' => 'https://jannah-prds.github.io/virtualtour.github.io/tour_ft' 
                ],

                [ 
                'source_img' => 'assets/img/ruang serbaguna.jpg', 
                    'nama_fasilitas' => 'Ruang Serbaguna', 
                    'desc_fasilitas' => 'Sebagai sarana penunjang kegiatan proses belajar dan mengajar Universitas Indo Global Mandiri juga memiliki Aula serbaguna dengan daya tampung 1000 orang, yang dilengkapi dengan fasilitas full AC, Sound System, LCD Projektor, dan berbagai macam sarana pendukung. Aula serbaguna dapat dimanfaatkan sebagai tempat Seminar, Workshop atau kegiatan-kegiatan lainnya.', 
                    'link_fasilitas' => 'https://jannah-prds.github.io/virtualtour.github.io/tour_aula/' 
                ],

                [ 
                    'source_img' => 'assets/img/perpus.jpg', 
                    'nama_fasilitas' => 'Ruang Perpustakaan', 
                    'desc_fasilitas' => 'Sebagai tempat menimba ilmu pengetahuan, Universitas Indo Global Mandiri menyediakan perpustakaan yang dilengkapi dengan beberapa buku yang terdiri dari buku literatur baik dalam bahasa Indonesia maupun bahasa Inggris, majalah, jurnal ilmiah serta buku ilmu pengetahuan lainnya', 
                    'link_fasilitas' => 'https://jannah-prds.github.io/virtualtour.github.io/tour_perpus' 
                ], 

            
            ];

            $fkip = [
                [ 
                    'source_img' => 'assets/img/ruang fe.jpg', 
                    'nama_fasilitas' => 'Ruang Fakultas keguruan dan ilmu pengetahuan ', 
                    'desc_fasilitas' => 'Kenyamanan dan Ketenangan adalah salah faktor pendukung dalam kelancaran proses belajar mengajar, untuk itu Universitas Indo Global Mandiri menyediakan seluruh ruang kuliah full AC dan dilengkapi dengan peralatan yang sangat menunjang diantaranya LCD Projektor, OHP, Sentral Sound System, Komputer & Video Presenter dan lainnya.
Fakultas Keguruan & Ilmu Pendidikan (FKIP) memiliki satu program studi yaitu Pendidikan Bahasa Inggris (S1)
', 
                    'link_fasilitas' => 'https://jannah-prds.github.io/virtualtour.github.io/tour_fkip' 
                ],
                [ 
                    'source_img' => 'assets/img/ruang fipb.jpg', 
                    'nama_fasilitas' => 'Labolatorium Bahasa', 
                    'desc_fasilitas' => 'Laboratorium sangat diperlukan untuk menunjang proses belajar mengajar, di Universitas Indo Global Mandiri, terdapat beberapa Laboratorium yang dapat digunakan mahasiswa. Salah satu diantaranya adalah  lab bahasa', 
                    'link_fasilitas' => 'https://jannah-prds.github.io/virtualtour.github.io/tour_bahasa' 
                ],

                [
                'source_img' => 'assets/img/perpus.jpg', 
                'nama_fasilitas' => 'Ruang Perpustakaan', 
                'desc_fasilitas' => 'Sebagai tempat menimba ilmu pengetahuan, Universitas Indo Global Mandiri menyediakan perpustakaan yang dilengkapi dengan beberapa buku yang terdiri dari buku literatur baik dalam bahasa Indonesia maupun bahasa Inggris, majalah, jurnal ilmiah serta buku ilmu pengetahuan lainnya', 
                'link_fasilitas' => 'https://jannah-prds.github.io/virtualtour.github.io/tour_perpus' 
                ],

            ];

            if(isset($_GET['hasil'])){
                $hasil = $_GET['hasil'];
                if($hasil == "1b14097a5f71d45644bd8a3545e10bfd"){
                    foreach($fasilkom as $fasilkom)
                    { 
                        ?>
                        <div class="view-info">
                            <img src="<?php echo $fasilkom['source_img']  ?>" />
                            <div class="view-info-text">
                                <h4><?php echo $fasilkom['nama_fasilitas'] ?></h4>
                                <p><?php echo $fasilkom['desc_fasilitas'] ?></p>
                                <a href="<?php echo $fasilkom['link_fasilitas'] ?>">
                                    <button>Link</button>
                                </a>
                            </div>
                        </div>
                        <?php
                    }
                } else if ($hasil == "6515f66056b8cbcaa61ca9e02efb3698") {
                    foreach($fe as $fe) 
                    {
                        ?>
                        <div class="view-info">
                            <img src="<?php echo $fe['source_img']  ?>" />
                            <div class="view-info-text">
                                <h4><?php echo $fe['nama_fasilitas'] ?></h4>
                                <p><?php echo $fe['desc_fasilitas'] ?></p>
                                <a href="<?php echo $fe['link_fasilitas'] ?>">
                                    <button>Link</button>
                                </a>
                            </div>
                        </div>
                        <?php
                    }
                } else if ($hasil == "c02776e0078af04d596ad1b17f837677") {
                    foreach($fipb as $fipb) 
                    {
                        ?>
                        <div class="view-info">
                            <img src="<?php echo $fipb['source_img']  ?>" />
                            <div class="view-info-text">
                                <h4><?php echo $fipb['nama_fasilitas'] ?></h4>
                                <p><?php echo $fipb['desc_fasilitas'] ?></p>
                                <a href="<?php echo $fipb['link_fasilitas'] ?>">
                                    <button>Link</button>
                                </a>
                            </div>
                        </div>
                        <?php
                    }
                } else if ($hasil == "1e2f86b95d78d7f8cfcbdc1a07b2fbd7") {
                    foreach($ft as $ft) 
                    {
                        ?>
                        <div class="view-info">
                            <img src="<?php echo $ft['source_img']  ?>" />
                            <div class="view-info-text">
                                <h4><?php echo $ft['nama_fasilitas'] ?></h4>
                                <p><?php echo $ft['desc_fasilitas'] ?></p>
                                <a href="<?php echo $ft['link_fasilitas'] ?>">
                                    <button>Link</button>
                                </a>
                            </div>
                        </div>
                        <?php
                    }
                } else if ($hasil == "fd1eb46f431713f74c262b71361f8691") {
                    foreach($fkip as $fkip) 
                    {
                        ?>
                        <div class="view-info">
                            <img src="<?php echo $fkip['source_img']  ?>" />
                            <div class="view-info-text">
                                <h4><?php echo $fkip['nama_fasilitas'] ?></h4>
                                <p><?php echo $fkip['desc_fasilitas'] ?></p>
                                <a href="<?php echo $fkip['link_fasilitas'] ?>">
                                    <button>Link</button>
                                </a>
                            </div>
                        </div>
                        <?php
                    }
                } else {
                    ?>
                    <div>
                        <p>Nggak ada lur</p>
                    </div>
                    <?php
                } 
            }
            ?>
            <div class="line"><br></div>
        </div>
    </div>
</body>
</html>