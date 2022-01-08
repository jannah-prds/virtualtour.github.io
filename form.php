<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Form Rekomendasi</title>

    <link rel="icon" href="../assets/img/favicon.ico">
    <link rel="stylesheet" href="../assets/css/style-form.css">
    <link rel="stylesheet" href="../assets/css/style-form-responsive.css">
</head>
<body>
    <div class="container">
        <div class="view-container">
            <div class="view-form">
                <h1>Form Rekemendasi</h1>
                <View class="view-input">
                    <form method="POST" action="process.php">
                        <h4>Nama</h4>
                        <input class="view-input-text" type="text" />
                        <h4>Jenis Kelamin</h4>
                        <div class="view-input-radio">
                            <input class="radio-style" type="radio" name="jenis_kelamin" value="L">
                            <label class="label-radio-style" for="L">Laki-laki</label>
                            <input class="radio-style" type="radio" id="P" name="jenis_kelamin" value="P">
                            <label class="label-radio-style" for="P">Perempuan</label>
                        </div>
                        <h4>Asal Sekolah</h4>
                        <div class="view-input-radio">
                            <input class="radio-style" type="radio" id="sma" name="asal_sekolah" value="sma">
                            <label class="label-radio-style" for="sma">SMA</label>
                            <input class="radio-style" type="radio" id="smk" name="asal_sekolah" value="smk">
                            <label class="label-radio-style" for="smk">SMK</label>
                            <input class="radio-style" type="radio" id="ma" name="asal_sekolah" value="ma">
                            <label class="label-radio-style" for="ma">MA</label>
                            <input class="radio-style" type="radio" id="etc" name="asal_sekolah" value="etc">
                            <label class="label-radio-style" for="etc">Lainnya</label>
                        </div>
                        <h4>Asal Daerah</h4>
                        <div class="view-input-radio">
                            <input class="radio-style" type="radio" id="palembang" name="asal_daerah" value="palembang">
                            <label class="label-radio-style" for="palembang">Palembang</label>
                            <input class="radio-style" type="radio" id="luar_palembang" name="asal_daerah" value="luar_palemgbang">
                            <label class="label-radio-style" for="luar_palembang">Luar Palembang</label>
                        </div>
                        <h4>Minat</h4>
                        <select class="view-input-text" name="minat" id="minat">
                            <option value="1">Tertarik Dengan Ilmu Komputer</option>
                            <option value="2">menyukai angka dan rumus</option>
                            <option value="3">tertarik mengembangkan suatu teknologi</option>
                            <option value="4">senang memecahkan masalah</option>
                            <option value="5">menyukai membuat dan mengolah data</option>
                            <option value="6">Senang membuat program </option>
                            <option value="7">menyukai akuntansi</option>
                            <option value="8">menyukai dalam menghitung angka dan uang</option>
                            <option value="9">tertarik dengan segala macam managemen</option> 
                            <option value="10">senang mempelajari ilmu bisnis</option>
                            <option value="11">tertarik dengan ilmu politik</option>
                            <option value="12">senang menggambar ilustrasi sesuatu/barang</option>
                            <option value="13">menyukai dan tertarik dengan fotografi</option>
                            <option value="14">menghasilkan karya seni</option>
                            <option value="15">menyukai pelajaran fisika</option>
                            <option value="16">senang merakit model bangunan</option>
                            <option value="17">menyukai mendesain ruangan</option>
                            <option value="18">cepat tanggap di segala situasi darurat</option>
                            <option value="19">menyukai ilmu sastra dan bahasa asing</option>
                            <option value="20">Mampu dan senang mempelajari bahasa inggris</option> 
                        </select>
                        <div class="btn-form-modal">
                            <input type="submit" value="Rekomendasi" name="submit">
                        </div>
                    </form>
                </View>
            </div>
        </div>
    </div>
</body>
</html>