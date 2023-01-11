import React from 'react'
import {AiOutlineGithub, AiOutlineInstagram, AiOutlineLinkedin} from 'react-icons/ai'
import {HiOutlineUser} from 'react-icons/hi'
import {AiOutlineFileText, AiOutlineCode} from 'react-icons/ai'

export default function Home() {
  return (
    <div className='bg-ungutua '>
        <nav className='fixed z-50 w-full flex justify-center md:justify-between px-10 py-3 bg-ungutua text-putihtua '>
            <div className='hidden md:inline text-white p-2 font-semibold text-xl underline text-oren'>Portofolio</div>

            <ul className='flex justify-center text-center gap-12 md:justify-evenly md:gap-6 p-2 rounded-xl text-sm font-semibold'>
                <li className='w-10 rounded-xl flex justify-center md:w-16 '>
                    <a href='#about' className='md:hidden p-2 w-full rounded-xl hover:bg-yellow-300'><HiOutlineUser size={19} className="hover:text-oren"/></a>
                    <a href='#about' className='hidden md:inline p-2 text-putihtua hover:text-oren text-lg'>About</a>
                </li>
                <li className='w-10 rounded-xl flex justify-center md:w-16 '>
                    <a href='#resume' className='md:hidden p-2 w-full rounded-xl hover:bg-yellow-300'><AiOutlineFileText size={19} className="hover:text-oren"/></a>
                    <a href='#resume' className='hidden md:inline p-2 text-putihtua hover:text-oren text-lg'>Resume</a>
                </li>
                <li className='w-10 rounded-xl flex justify-center md:w-16 '>
                    <a href='#projek' className='md:hidden p-2 w-full rounded-xl hover:bg-yellow-300'><AiOutlineCode size={19} className="hover:text-oren"/></a>
                    <a href='#projek' className='hidden md:inline p-2 text-putihtua hover:text-oren text-lg'>Project</a>
                </li>
            </ul>
        </nav>


        <div className=' flex flex-wrap gap-4 p-10 h-full bg-ungutua pt-10' id='about'>
            <div className='flex flex-wrap justify-between mt-24'>
                <div className='flex flex-wrap gap-2  lg:w-1/2 h-max bg-ungutua p-4 rounded-xl '>
                    <div className=' flex flex-wrap gap-2 text-putihtua'>
                        <h1 className='text-5xl font-bold m-4'><span className='tet-bold'>Hi!,</span> <br/> Saya Asep Suherman</h1>
                        <h3 className='font-semibold m-4 text-lg mt-6'>Mahasiswa Informatika dari Universitas Teknologi Digital Indonesia. Dan saya adalah seorang Front End Developer yang berspesialisasi dalam membangun website sisi klien.</h3>
                    </div>
                    
                    <div className=' flex justify-between w-full mt-6'>
                        <div className='flex gap-4 m-2 px-2 '>
                            <a href="https://www.aedin.com/in/asep-suherman-471977217/" className='  rounded-md text-warning hover:text-putihtua'><AiOutlineLinkedin size={24}/></a>
                            <a href="https://github.com/Asepsuherman" className='  rounded-md text-warning hover:text-putihtua'><AiOutlineGithub size={24}/></a>
                            <a href="https://www.instagram.com/asepshrm_" className='  rounded-md text-warning hover:text-putihtua'><AiOutlineInstagram size={24}/></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>


        <div className='bg-ungutua p-10 w-full h-full text-putihtua' id='resume'>
            <div className=' mt-10 text-center'>
                <span className='text-xl font-bold text-putihtua'>RESUME</span>
            </div>

                <div className='px-8 pb-2 '>
                    <div className=' mt-28 grid grid-cols-1 md:grid-cols-2  gap-10  rounded-xl bg-ungutua'>
                        {/* ini */}
                        <div className='  bg-navi rounded-xl'>
                            <div className="w-full text-center" >
                                <div className="relative flex flex-col break-words w-full ">
                                    <div className="px-6 p-4 ">


                                        <div className="flex flex-wrap justify-center p-4 ">
                                            <div className="w-full flex justify-center ">
                                                <div className="w-[150px] p-4 mt-5">
                                                    <img alt="..." src="../asset/Photo.png" className="shadow-xl rounded-full bg-ungutua "/>
                                                </div>
                                            </div>
                                            
                                            <div className="w-full text-center flex justify-center mt-10">
                                                <div className="mb-2 text-putihtua text-xl font-bold italic">
                                                    <i className="fas fa-briefcase mr-2 text-lg "></i>Junior Front End </div>
                                            </div>
                                            <hr className='border border-putihtua w-[70%]'/>
                                        </div>

                                        <div className="text-center mt-2">
                                            <div className="mb-2 text-putihtua text-normal">
                                                <i className="fas fa-university mr-2 text-lg"></i>Universitas Teknologi Digital Indonesia
                                            </div>
                                        </div>


                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className=' p-4 border border-navi rounded-xl'>
                            <div className=''>
                                <h1 className='font-bold'>Asep Suherman</h1>
                                <h3 className='text-sm italic'>Junior Front End</h3>
                                <hr className='border border-navi mt-2'/>
                                <p className='font-normal mt-[26px] text-justify'>Mahasiswa Informatika dari Universitas Teknologi Digital Indonesia. Memiliki ketertarikan pada hal-hal terkait IT, design, dan fotografi. Memiliki kemampuan dasar sebagai Junior Front End Developer dan mempunyai minat lain di bidang fotografi.</p>
                            </div>

                            <div className='mt-10 '>
                                <div className='grid'>
                                    <span className='font-bold'>Pendidikan :</span>
                                    <hr className='border border-navi mt-2 '/>
                                </div>

                                <div className='flex flex-wrap'>
                                    <ul className="mt-10 steps gap-4 geser">
                                        <div>
                                            <div className=' w-60 border rounded-xl border-navi bg-navi'>
                                                <div className='p-4 text-center'>
                                                    <span className='font-normal'>Universitas Teknologi Digital Indonesia</span>
                                                </div>
                                            </div>
                                            <li data-content="●" className=" step step-warning text-warning mb-4 text-sm font-normal">2020-Sekarang</li>
                                        </div>

                                        <div>
                                            <div className=' w-60 border rounded-xl border-navi bg-navi'>
                                                <div className='p-4 text-center'>
                                                    <span className='font-normal'>SMK Negeri 1 Alian Kebumen</span>
                                                </div>
                                            </div>
                                            <li data-content="✓" className=" step mb-4 text-sm font-normal">2017-2020</li>
                                        </div>

                                        <div>
                                            <div className=' w-60 border rounded-xl border-navi bg-navi'>
                                                <div className='p-4 text-center'>
                                                    <span className='font-normal'>SMP Negeri 2 Karangsambung</span>
                                                </div>
                                            </div>
                                            <li data-content="✓" className=" step mb-4 text-sm font-normal">2014-2017</li>
                                        </div>

                                        <div className=''>
                                            <div className=' w-60 border rounded-xl border-navi bg-navi'>
                                                <div className='p-4 text-center'>
                                                    <span className='font-normal'>SD Negeri 2 Plumbon Karangsambung</span>
                                                </div>
                                            </div>
                                            <li data-content="✓" className=" step mb-4 text-sm font-normal">2008-2014</li>
                                        </div>  
                                    </ul>
                                </div>
                            </div>
                        </div>
                        {/* ok */}

                <div className='border border-navi rounded-xl p-4'>
                    <div className='text-center md:text-left'>
                        <h1 className='font-extrabold'>Organisasi :</h1>
                    </div>
                    <ol className='grid gap-4 mt-8 lg:mt-3 list-decimal pl-4'>
                        <li className='text-sm'>
                            <div className=''>
                                <h3 className='font-bold'>UKM IK - <span className='text-warning'>(2021 s/d Sekarang)</span></h3>
                                <span className='text-sm italic font-normal text-justify'>Unit Kegiatan Mahasiswa Informatika dan Komputer Universitas Teknologi Digital Indonesia</span>
                            </div>
                        </li>
                        <li className='text-sm'>
                            <div className=''>
                            <h3 className='font-bold'>Karang Taruna - <span className='text-warning '>(2019 s/d 2020)</span></h3>
                            <span className='text-sm italic font-normal text-justify'>Karang Taruna Desa Plumbon Kecamatan Karangsambung Kebumen</span>
                            </div>
                        </li>
                    </ol>
                </div>

                <div className='border border-navi rounded-xl p-4 text-putihtua'>
                    <div className='text-center md:text-left'>
                        <h1 className='font-extrabold'>Hobi :</h1>
                    </div>
                    <ol className='list-decimal mt-8 lg:mt-3 grid gap-1 pl-4'>
                        <li className='text-sm'>
                            <h3 className='font-normal'>Fotografi</h3>
                        </li>
                        <li className='text-sm'>
                            <h3 className='font-normal'>Videografi</h3>
                        </li>
                        <li className='text-sm'>
                            <h3 className='font-normal'>Bermain Game Online</h3>
                        </li>
                        <li className='text-sm'>
                            <h3 className='font-normal'>Bermain Volly</h3>
                        </li>
                        <li className='text-sm'>
                            <h3 className='font-normal'>Bermain Catur</h3>
                        </li>
                    </ol>
                </div>
                
                <div className='border-hidden lg:border border-navi rounded-xl grid gap-10'>
                    <div className=' p-4 rounded-xl border border-navi'>
                        <div className='text-center md:text-left'>
                            <h1 className='font-extrabold'>Keterampilan :</h1>
                        </div>

                        <div className='flex gap-6 md:grid lg:flex  mt-8 lg:mt-3'>
                            <div className=''>
                                <span className='pl-0 font-normal'>Pemrograman :</span>
                                <ol className='list-decimal grid gap-1 pl-4 mt-2'>
                                    <li className='text-sm'>
                                        <h3 className='font-normal'>HTML 5</h3>
                                    </li>
                                    <li className='text-sm'>
                                        <h3 className='font-normal'>CSS</h3>
                                    </li>
                                    <li className='text-sm'>
                                        <h3 className='font-normal'>JavaScript</h3>
                                    </li>
                                    <li className='text-sm'>
                                        <h3 className='font-normal'>React JS</h3>
                                    </li>
                                    <li className='text-sm'>
                                        <h3 className='font-normal'>Tailwind CSS</h3>
                                    </li>
                                    <li className='text-sm'>
                                        <h3 className='font-normal'>Chakra UI</h3>
                                    </li>
                                    <li className='text-sm'>
                                        <h3 className='font-normal'>Node JS</h3>
                                    </li>
                                </ol>
                            </div>

                            <div className=''>
                                <span className='pl-0 font-normal'>Desain :</span>
                                <ol className='list-decimal grid gap-1 pl-4 mt-2'>
                                    <li className='text-sm'>
                                        <h3 className='font-normal'>Figma</h3>
                                    </li>
                                    <li className='text-sm'>
                                        <h3 className='font-normal'>CorelDraw</h3>
                                    </li>
                                    <li className='text-sm'>
                                        <h3 className='font-normal'>Canva</h3>
                                    </li>
                                    <li className='text-sm'>
                                        <h3 className='font-normal'>Adobe Photoshop</h3>
                                    </li>
                                </ol>
                            </div>

                            <div className=''>
                                <span className='pl-0 font-normal'>Lainnya :</span>
                                <ol className='list-decimal grid gap-1 pl-4 mt-2'>
                                    <li className='text-sm'>
                                        <h3 className='font-normal'>Adobe Lighroom</h3>
                                    </li>
                                </ol>
                            </div>
                        </div>
                    </div>


                    <div className=' rounded-xl p-2 border border-navi '>
                        <div className='text-center md:text-left'>
                            <h1 className='font-extrabold'>Pengalaman :</h1>
                        </div>
                        <ol className='list-decimal mt-8 lg:mt-3 grid gap-1 pl-4'>
                            <li className='text-sm'>
                                <h3 className='font-bold'>Studi Independen - <span className='text-oren'>(18 Agustus s/d 23 Desember 2022)</span></h3>
                                <span className='font-normal italic'>PT Ruang Raya Indonesia (Ruangguru)</span>
                            </li>
                        </ol>
                    </div>

                    <div className=' rounded-xl p-2 border border-navi'>
                        <div className='text-center md:text-left'>
                            <h1 className='font-extrabold'>Sertifikasi :</h1>
                        </div>
                        <ol className='list-decimal mt-8 lg:mt-3 grid gap-4 pl-4'>
                            <li className='text-sm'>
                                <h3 className='font-bold'>Front End Engineering Ruangguru Camp Batch 3 - <span className='text-warning'>(2022)</span></h3>
                                <span className='italic font-normal'>PT Ruang Raya Indonesia (Ruangguru)</span>
                            </li>
                            <li className='text-sm'>
                                <h3 className='font-bold'>Belajar Dasar Pemrograman Web - <span className='text-warning'>(2021)</span></h3>
                                <span className='italic font-normal'>PT Dicoding Akademi Indonesia (Dicoding)</span>
                            </li>
                        </ol>
                    </div>
                </div>

                <div className='border border-navi rounded-xl p-4'>
                    <div className='text-center md:text-left'>
                        <h1 className='font-extrabold'>Daftar Projek :</h1>
                    </div>
                    <ol className='list-decimal mt-3 grid gap-4 pl-4'>
                        <li className='text-sm'>
                            <h3 className='font-bold'>Onlook-Literacy</h3>
                            <span className='italic font-normal'>Onlook-Literacy adalah web landing page literasi online yang tujuannya untuk challenge pertama saya dalam membuat suatu website, web ini dibuat hanya dengan dengan menggunakan HTML dan Css dasar.</span>
                        </li>
                        <li className='text-sm'>
                            <h3 className='font-bold'>Dummy Project Logo</h3>
                            <span className='italic font-normal'>Dummy Project Logo adalah web landing page yang dibuat untuk implementasi frarmework Tailwind Css dasar. web ini merupakan hasil dari pembelajaran MSIB Batch 3 di mitra Ruangguru yang dibuat dengan Framwork Tailwind Css.</span>
                        </li>
                        <li className='text-sm'>
                            <h3 className='font-bold'>Gallery-App</h3>
                            <span className='italic font-normal'>Galeri App adalah web aplikasi yang menggunakan metode CRUD untuk menampilkan data API serta melakukan perubahan data berdasarkan interaksi user. Gallery App dibuat menggunakan librarry React Js dan framework Chakra Ui.</span>
                        </li>

                        <li className='text-sm'>
                            <h3 className='font-bold'>Hermovies</h3>
                            <span className='italic font-normal'>Hermovies adalah web aplikasi yang mengkonsumsi data movies dari API. Dalam Hermovies terdapat fitur dasar untuk melakukan sorting data berdasarkan Rating, Release, dan Popularity. Aplikasi ini dibuat menggunakan librarry React Js dan framework Tailwind Css.</span>
                        </li>
                    </ol>
                </div>
                {/* aaaa */}
                    </div>
                </div>

            {/* <div className='p-8 grid sm:grid-cols-2 md:grid-cols-2 gap-8 font-semibold'>                
            </div> */}

        </div>

        {/* BATAS */}
        <div className='bg-ungutua h-full p-10 grid' id='projek'>
            <div className='mt-10 mx-auto'>
                <span className='text-xl font-bold text-putihtua'>PROJEK</span>
            </div>
            <div className='mt-10 p-8 grid gap-8 grid-cols-1 md:grid-cols-2'>
                <div className=''>
                    <a href="https://onlook-literacy-asep-suherman.netlify.app/">
                        <img src='../asset/project/1.png' alt='' className='rounded-xl'/>
                    </a>
                </div>

                <div className=''>
                    <a href="https://asep-suherman-final-project.netlify.app">
                        <img src='../asset/project/2.png' alt='' className='rounded-xl'/>
                    </a>
                </div>

                <div className=''>
                    <a href="https://asepsuherman-fe2664682.netlify.app">
                    <img src='../asset/project/3.png' alt='' className='rounded-xl'/>
                    </a>
                </div>

                <div className=''>
                    <a href="https://hermovies-app.vercel.app/movies">
                        <img src='../asset/project/4.png' alt='' className='rounded-xl'/>
                    </a>
                </div>
            </div>
        </div>

        <footer className="mt-4 footer footer-center p-8">
            <div className=''>
                <p className='text-putihtua italic'>Created © 2023 - Asep Suherman</p>
            </div>
        </footer>
    </div>
  )
}
