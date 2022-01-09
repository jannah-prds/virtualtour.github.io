<?php
require_once __DIR__ . '/vendor/autoload.php';

use Phpml\Classification\KNearestNeighbors;

// [jk,asl_sklh,asl_drh,mnt]
$samples = [[2,2,1,3],[1,1,1,1],[2,2,1,3],[1,1,2,3],[1,2,1,3],
[2,2,2,2],[1,2,1,2],[2,2,1,1],[2,1,2,1],[2,2,2,1],[1,2,1,2],
[2,1,2,3],[1,2,2,3],[2,2,1,1],[1,1,1,1],[2,2,1,2],[1,2,1,2],
[1,1,1,2],[1,1,1,4],[1,2,1,2],[1,1,2,3],[2,1,1,1],[2,1,2,2],
[1,1,1,4],[1,1,2,1],[1,1,2,4],[1,1,2,4],[2,1,1,2],[1,1,1,2],
[2,2,1,1],[2,2,1,1],[1,1,1,1],[2,1,2,1],[2,1,2,1],[1,1,1,1],
[2,2,1,5],[1,1,1,5],[1,3,2,1],[1,3,1,3],[1,1,1,1],[1,2,2,1],
[1,1,2,1],[1,1,1,1],[2,1,2,5],[2,1,2,3],[1,1,2,3],[1,1,1,4],
[2,1,2,1],[1,3,2,1],[1,1,2,3],[2,1,2,1],[1,3,2,1],[2,1,1,1],
[1,1,2,1],[1,3,1,1],[1,1,1,5],[2,1,2,1],[2,2,2,1],[1,2,2,3],
[1,3,1,3],[1,2,1,4],[1,1,1,1],[1,1,1,1],[2,2,2,1],[1,2,1,3],
[2,1,1,2],[1,2,1,1],[2,1,1,3],[1,2,1,5],[2,2,1,1],[1,2,1,1],
[1,1,1,1],[1,1,2,1],[2,1,1,1],[1,1,1,3],[1,1,1,1],[2,2,1,3],
[1,1,1,5],[1,2,1,1],[2,1,1,3],[1,1,1,5],[1,1,2,3],[1,2,1,4],
[2,2,2,3],[1,3,1,4],[2,1,1,4],[1,2,1,1],[2,1,2,4],[1,1,2,1]]
;
$labels = [1,1,3,3,3,2,2,1,3,1,2,1,3,1,2,1,2,2,1,2,3,1,3,2,1,4,4,4,2,1,1,1,1,1,1,5,5,1,5,1,1,1,1,5,5,5,1,1,5,1,1,1,1,1,5,1,1,5,5,5,1,5,1,5,4,1,1,5,1,1,4,1,5,1,1,1,5,1,3,5,3,4,5,4,4,1,4,1];

$classifier = new KNearestNeighbors();
$classifier->train($samples, $labels);

// inisiasi variabel
$jk =0;
$mnt =0;
$asl_drh =0;
$asl_sklh =0;

//definisi variabel sementara
$jenis_kelamin=null;
$asal_daerah=null;
$asal_sekolah=null;
$minat=null;

//action submit
if (isset($_POST['submit'])){
    //variable dari php diisi dengan vaariable dari html, perhatikan nama dari masing2 tag html
    $jenis_kelamin = $_POST['jenis_kelamin'];
    $asal_daerah = $_POST['asal_daerah'];
    $asal_sekolah = $_POST['asal_sekolah'];
    $minat = $_POST['minat'];

    if($jenis_kelamin=='P'){
        $jk=1;
         }else{
        $jk=2;
              }

    if($asal_daerah=='palembang'){
        $asl_drh=1;
    }    else {
         $asl_drh=2;
    }

    if($asal_sekolah=='sma'){
        $asl_sklh=1;
    }else if($asal_sekolah=='smk'){
         $asl_sklh=2;
     }else if($asal_sekolah=='ma'){
         $asl_sklh=3;
    }else {
     $asl_sklh=4;
    }

 //nomor case diambil dari option value dari tag html diatas
    switch ($minat) {
     case 1 : $mnt = $mnt=1;break;
     case 2 : $mnt = $mnt=1;break;
     case 3 : $mnt = $mnt=1;break;
     case 4 : $mnt = $mnt=1;break;
     case 5 : $mnt = $mnt=1;break;
     case 6 : $mnt = $mnt=1;break;
     case 7 : $mnt = $mnt=2;break;
     case 8 : $mnt = $mnt=2;break;
     case 9 : $mnt = $mnt=2;break;
     case 10 : $mnt = $mnt=2;break;
     case 11 : $mnt = $mnt=3;break;
     case 12 : $mnt = $mnt=3;break;
     case 13 : $mnt = $mnt=3;break;
     case 14 : $mnt = $mnt=3;break;
     case 15 : $mnt = $mnt=3;break;
     case 16 : $mnt = $mnt=3;break;
     case 17 : $mnt = $mnt=3;break;
     case 18 : $mnt = $mnt=3;break;
     case 19 : $mnt = $mnt=3;break;
     case 20 : $mnt = $mnt=3;break;
 }
 
 $prediction = $classifier->predict([$jk,$asl_sklh,$asl_drh,$minat]);
 
 str_repeat('&nbsp;', 5);
  echo $prediction;
  
if ($prediction==1){
 echo "Fasilkom";
 header("location:info.php?hasil=1b14097a5f71d45644bd8a3545e10bfd");
}else if($prediction==2){
 echo "FE";
 header("location:info.php?hasil=6515f66056b8cbcaa61ca9e02efb3698");
}else if($prediction==3){
 echo "FIPB";
 header("location:info.php?hasil=c02776e0078af04d596ad1b17f837677");
}else if($prediction==4){
 echo "FT";
 header("location:info.php?hasil=1e2f86b95d78d7f8cfcbdc1a07b2fbd7");
}else{
 echo "FKIP";
 header("location:info.php?hasil=fd1eb46f431713f74c262b71361f8691");
}

 //tinggal kasih if sampe akhir buat href link atau biso pake goto url
  /*if ($prediction = 'Fakultas Ilmu Komputer (FASILKOM)'){
     ?> <a href="virtual_tour_fasilkom.html">Pergi Ke VT Fasilkom</a>
  <?php
  }*/
}
?>