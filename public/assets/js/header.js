(function injectApricotMainNavUi() {
    if (document.getElementById('apricot-main-nav-ui')) return;
    const style = document.createElement('style');
    style.id = 'apricot-main-nav-ui';
    style.textContent = `
/* Home + Rehabilitation: same default ink as other top-level links; brand orange only on hover */
.main-header .main-menu .main-menu__list > li.megamenu > a,
.main-header .main-menu .main-menu__list > li.megamenu + li.dropdown > a,
.sticky-header--cloned .main-menu .main-menu__list > li.megamenu > a,
.sticky-header--cloned .main-menu .main-menu__list > li.megamenu + li.dropdown > a {
  color: var(--sifoxen-black, #362048);
  text-shadow: none;
  transition: color 0.35s ease;
}
.main-header .main-menu .main-menu__list > li.megamenu:hover > a,
.main-header .main-menu .main-menu__list > li.megamenu + li.dropdown:hover > a,
.sticky-header--cloned .main-menu .main-menu__list > li.megamenu:hover > a,
.sticky-header--cloned .main-menu .main-menu__list > li.megamenu + li.dropdown:hover > a {
  color: var(--sifoxen-base, #f89f21);
  text-shadow: 0 0 0.5px currentColor;
}
`;
    document.head.appendChild(style);
})();

class Header extends HTMLElement {
    connectedCallback() {

        this.innerHTML = `


     <header class="main-header main-header--one sticky-header sticky-header--normal">
            <div class="main-header__bg" style="background-image: url(assets/images/shapes/header-shape-bg-1-1.png);"></div><!-- /.main-header__bg -->
            <div class="topbar-one">
                <div class="container-fluid">
                    <div class="topbar-one__inner">
                        <ul class="list-unstyled topbar-one__info">
                            <li>
                                <span class="topbar-one__info__icon">
                                    <i class="icon-mail"></i>
                                </span>
                                <a href="mailto:hello@apricotcare.in" class="text-white">hello@apricotcare.in</a>
                            </li>
                            <li>
                                <span class="topbar-one__info__icon topbar-one__info__icon--phone">
                                    <i class="icon-phone-call"></i>
                                </span>
                                <a href="tel:+917387641462" class="text-white">+917387641462</a>
                            </li>
                        </ul><!-- /.list-unstyled topbar-one__info -->
                        <div class="topbar-one__right">
                            <div class="topbar-one__open">
                                <span class="topbar-one__open__icon">
                                    <i class="icon-clock"></i>
                                </span>
                                <p class="topbar-one__open__text text-white">Mon to Sun 8:00am to 8:00pm</p><!-- /.topbar-one__open__text -->
                            </div><!-- /.topbar-one__open -->
                            <div class="topbar-one__social">
                                <a href="https://www.facebook.com/apricotcare">
                                    <i class="fab fa-facebook-f" aria-hidden="true"></i>
                                    <span class="sr-only">Facebook</span>
                                </a>
                                <a href="https://x.com/care_apricot">
                                    <i class="fab fa-twitter" aria-hidden="true"></i>
                                    <span class="sr-only">Twitter</span>
                                </a>
                                <a href="https://www.instagram.com/apricotcare_neurorehab_pune/">
                                    <i class="fab fa-instagram" aria-hidden="true"></i>
                                    <span class="sr-only">Instagram</span>
                                </a>
                                <a href="https://www.youtube.com/@ApricotCare">
                                    <i class="fab fa-youtube" aria-hidden="true"></i>
                                    <span class="sr-only">Youtube</span>
                                </a>
                            </div><!-- /.topbar-one__social -->
                        </div><!-- /.topbar-one__right -->
                    </div><!-- /.topbar-one__inner -->
                </div><!-- /.container-fluid -->
            </div><!-- /.topbar-one -->
            <div class="container-fluid">    
                <div class="main-header__inner">
                    <div class="main-header__logo">
                        <a href="/">
                            <img src="assets/images/home/Logo/Apricot Care Physiotherapy & Wellness, Kharad Pune (1).webp" alt="logo" alt="Sifoxen HTML" width="153" height="60">
                        </a>
                    </div><!-- /.main-header__logo -->
                    <div class="main-header__right">
                        <nav class="main-header__nav main-menu">
                            <ul class="main-menu__list">

                                <li class=" megamenu">
                                    <a href="/">Home</a>
                                   
                                </li>

                                <li class="dropdown">
                                    <a href="#">Rehabilitation</a>
                                    <ul class="drpdwn-container">
                                        <li class="dropdown">
                                            <a href="#">Medical Rehabilitation</a>
                                            <ul class="sub-menu drpdwn-container">
                                                <li><a href="/medical-rehabilitation/stroke-treatment-rehab-physiotherapy">Stroke Care</a></li>
                                                <li><a href="/medical-rehabilitation/spine-care-in-pune">Spine Care</a></li>
                                                <li><a href="/medical-rehabilitation/trauma-care-in-pune">Trauma Care</a></li>
                                                <li><a href="/medical-rehabilitation/orthopedic-care-in-pune">Orthopedic Care</a></li>
                                                <li><a href="/medical-rehabilitation/postoperative-care-in-pune">Postoperative Care</a></li>
                                                <li><a href="/medical-rehabilitation/oncology-care-in-pune">Oncology Care</a></li>
                                                <li><a href="/medical-rehabilitation/neuro-care-in-pune">Neuro Care</a></li>
                                                <li><a href="/medical-rehabilitation/paralysis-care-in-pune">Paralysis Care</a></li>
                                            </ul>
                                        </li>
                                        <li class="dropdown">
                                            <a href="#">Specialized Therapies</a>
                                            <ul class="sub-menu drpdwn-container">
                                                <li><a href="/specialized-therapies/physiotherapy-in-pune">Physiotherapy</a></li>
                                                <li><a href="/specialized-therapies/respiratory-therapy-in-pune">Respiratory Therapy</a></li>
                                                <li><a href="/specialized-therapies/nutrition-therapy-in-pune">Nutrition Therapy</a></li>
                                                <li><a href="/specialized-therapies/occupational-therapy-in-pune">Occupational Therapy</a></li>
                                                <li><a href="/specialized-therapies/psychological-rehabilitation-therapy-in-pune">Psychological Rehab Therapy</a></li>
                                                <li><a href="/specialized-therapies/integrative-therapy-in-pune">Integrative Therapy</a></li>
                                                <li><a href="/specialized-therapies/speech-and-swallow-therapy-in-pune">Speech & Swallow Therapy</a></li>
                                            </ul>
                                        </li>
                                        <li class="dropdown">
                                            <a href="#">Condition-Based Recovery</a>
                                            <ul class="sub-menu drpdwn-container">
                                                <li><a href="/condition-based-recovery/stroke-recovery-in-pune">Stroke Recovery</a></li>
                                                <li><a href="/condition-based-recovery/spinal-cord-injury-in-pune">Spinal Cord Injury</a></li>
                                                <li><a href="/condition-based-recovery/brain-injury-recovery-in-pune">Brain Injury Recovery</a></li>
                                                <li><a href="/condition-based-recovery/multiple-sclerosis-in-pune">Multiple Sclerosis</a></li>
                                                <li><a href="/condition-based-recovery/parkinsons-disease-in-pune">Parkinson's Disease</a></li>
                                                <li><a href="/condition-based-recovery/cerebral-palsy-in-pune">Cerebral Palsy</a></li>
                                                <li><a href="/condition-based-recovery/pain-management-in-pune">Pain Management</a></li>
                                                <li><a href="/condition-based-recovery/limb-loss-and-impairment-in-pune">Limb Loss & Impairment</a></li>
                                            </ul>
                                        </li>
                                        <li class="dropdown">
                                            <a href="#">Advanced Care Programs</a>
                                            <ul class="sub-menu drpdwn-container adv-drop-dwn">
                                                <li><a href="/advanced-care-programs/feeding-tube-care-in-pune">Feeding Tube Care</a></li>
                                                <li><a href="/advanced-care-programs/cardiac-rehabilitation-in-pune">Cardiac Rehabilitation Care</a></li>
                                                <li><a href="/advanced-care-programs/senior-care-in-pune">Senior Care</a></li>
                                                <li><a href="/advanced-care-programs/alzheimers-dementia-care-in-pune">Alzheimer’s Care</a></li>
                                                <li><a href="/advanced-care-programs/parkinsons-care-in-pune">Parkinson's Care</a></li>
                                                <li><a href="/advanced-care-programs/craniotomy-care-in-pune">Craniotomy Care</a></li>
                                                <li><a href="/advanced-care-programs/oncology-rehabilitation-in-pune">Oncology Rehabilitation</a></li>
                                                <li><a href="/advanced-care-programs/tracheostomy-care-in-pune">Tracheostomy Care</a></li>
                                                <li><a href="/advanced-care-programs/tkr-thr-knee-hip-replacement-care-in-pune">TKR/THR (Knee/Hip Replacement) Care</a></li>
                                                <li><a href="/advanced-care-programs/bedsore-management-in-pune">Bedsore Management</a></li>
                                               <li><a href="/advanced-care-programs/transitional-care-in-pune">Transitional Care</a></li> 

                                            </ul>
                                        </li>
                                    </ul>
                                </li>

                                <li class="dropdown">
                                    <a href="#">Home Care</a>
                                    <ul class="drpdwn-container">
                                        <li><a href="caregiver-services">Caregiver</a></li>
                                        <li><a href="nursing-care-at-home-in-pune">Nursing</a></li>
                                        <li><a href="icu-care-at-home">ICU at Home</a></li>
                                    </ul>
                                </li>

                                <li class="dropdown">
                                    <a href="/online-therapy/">Online Therapy</a>
                                    <ul class="drpdwn-container">
                                        <li><a href="/online-therapy#online-consultation">Online Consultation</a></li>
                                        <li><a href="/online-therapy#video-therapy-session">Video Therapy Sessions</a></li>
                                        <li><a href="/online-therapy#psychological-consuling">Online Psychological Counseling</a></li>
                                        <li><a href="/online-therapy#nutrition-guidance">Online Nutrition Guidance</a></li>
                                        <li><a href="/online-therapy#vr-monitoring">Virtual Recovery Monitoring</a></li>
                                    </ul>
                                </li>

                                <li class="dropdown">
                                    <a href="../about">About us </a>
                                     <ul class="drpdwn-container">
                                        <li><a href="../neuro-physiotherapist-in-pune">Our Experts</a></li>
                                    </ul>

                                </li>
                                 
                                <li>
                                    <a href="../blog">Blog</a>
                                </li>
                            </ul>
                        </nav><!-- /.main-header__nav -->
                        <div class="mobile-nav__btn mobile-nav__toggler">
                            <span></span>
                            <span></span>
                            <span></span>
                        </div><!-- /.mobile-nav__toggler -->
                       
                        <a href="contact" class="sifoxen-btn main-header__btn">
                            book appointment
                        </a> <!-- /.thm-btn main-header__btn -->
                    </div><!-- /.main-header__right -->
                </div><!-- /.main-header__inner -->
            </div><!-- /.container-fluid -->
        </header>`



    }
}

class Footer extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
          
              <footer class="main-footer" style="background-color: teal;">
            <div class="main-footer__bg"></div>
            <!-- /.main-footer__bg -->
            <div class="container">
                <div class="main-footer__top wow fadeInUp" data-wow-duration="1500ms">
                    <div class="main-footer__top__bg" style="background-image: url(assets/images/shapes/footer-top-bg.png);"></div><!-- /.main-footer__top__bg -->
                    <div class="main-footer__logo">
                        <a href="/">
                            <img src="assets/images/home/Logo/Apricot Care Physiotherapy & Wellness, Kharad Pune (1).webp" alt="logo" width="153" height="60" alt="Sifoxen HTML Template">
                        </a>
                    </div><!-- /.main-footer__logo -->
                    <div class="main-footer__newsletter">
                        <div action="#" data-url="MAILCHIMP_FORM_URL" class="main-footer__newsletter__form mc-form d-flex" style="justify-content: space-between;">
                            <div class="main-footer__newsletter__inner">
                             <h3> Call us to book your appointment</h3> 
                            </div><!-- /.main-footer__newsletter__inner -->
                            <button  class="sifoxen-btn"> <a href="tel:+917387641462" class="text-white">Book Appointment</a></button>
                            </div>
                        <!-- /.footer-widget__newsletter__form mc-form -->
                        <div class="mc-form__response"></div><!-- /.mc-form__response -->
                    </div><!-- /.main-footer__newsletter -->

                    <div class="main-footer__shape">
                         <!-- /.main-footer__shape__image -->
                        <div class="main-footer__shape__box"></div><!-- /.main-footer__shape__box -->
                    </div><!-- /.main-footer__shape -->
                </div><!-- /.main-footer__top -->
                <div class="row gutter-y-40 mb-5">
                    <div class="col-md-6 col-lg- col-xl-4 wow fadeInUp" data-wow-duration="1500ms" data-wow-delay="00ms">
                        <div class="footer-widget footer-widget--about">
                            <h2 class="footer-widget__title">about </h2><!-- /.footer-widget__title -->
                            <p class="footer-widget__about-text text-white">Empowering Healing and Growth through Expert Physiotherapy and Holistic Care</p><!-- /.footer-widget__about-text -->
                            <a href="contact" class="footer-widget__btn sifoxen-btn">book appointment</a><!-- /.sifoxen-btn -->
                        </div><!-- /.footer-widget -->
                    </div><!-- /.col-lg-4 -->

                    <div class="col-md-6 col-lg-4 col-xl-4 wow fadeInUp" data-wow-duration="1500ms" data-wow-delay="200ms">
                        <div class="footer-widget footer-widget--links">
                            <h2 class="footer-widget__title">Advanced Care Programs</h2><!-- /.footer-widget__title -->
                            <ul class="list-unstyled footer-widget__links text-white">
                                <li><a href="/advanced-care-programs/feeding-tube-care-in-pune" class="text-white">Feeding Tube Care</a></li>
                                <li><a href="/advanced-care-programs/cardiac-rehabilitation-in-pune" class="text-white">Cardiac Rehabilitation
                                    Care</a></li>
                                <li><a href="/advanced-care-programs/senior-care-in-pune" class="text-white">Senior Care</a></li>
                                <li><a href="/advanced-care-programs/alzheimers-dementia-care-in-pune" class="text-white">Alzheimer’s Care</a>
                                </li>
                                <li><a href="/advanced-care-programs/parkinsons-care-in-pune" class="text-white">Parkinson's Care</a></li>
                            </ul><!-- /.list-unstyled footer-widget__links -->
                        </div><!-- /.footer-widget -->
                    </div><!-- /.col-lg-6 -->
                    <div class="col-md-6 col-lg-4 col-xl-4 wow fadeInUp" data-wow-duration="1500ms" data-wow-delay="200ms">
                        <div class="footer-widget footer-widget--links">
                            <ul class="list-unstyled footer-widget__links">
                                <li><a href="/advanced-care-programs/craniotomy-care-in-pune" class="text-white">Carniotomy Care</a></li>
                                <li><a href="/advanced-care-programs/oncology-care-in-pune" class="text-white">Oncology Rehabilitation</a></li>
                                <li><a href="/advanced-care-programs/tracheostomy-care-in-pune" class="text-white">Tracheostomy Care</a></li>
                                <li><a href="/advanced-care-programs/tkr-thr-knee-hip-replacement-care-in-pune"
                                    class="text-white">TKR/THR(Knee/Hip/Replacement) Care</a></li>
                                <li><a href="/advanced-care-programs/bedsore-management-in-pune" class="text-white">Bedsore Management</a></li>
                               <li><a href="/advanced-care-programs/transitional-care-in-pune" class="text-white">Transitional Care</a></li>                             
                                </ul><!-- /.list-unstyled footer-widget__links -->
                        </div><!-- /.footer-widget -->
                    </div>
                  
                  
                </div><!-- /.row -->
                 <div class="row gutter-y-40">
                  
                    <div class="col-md-6 col-lg-4 col-xl-3 wow fadeInUp" data-wow-duration="1500ms" data-wow-delay="200ms">
                        <div class="footer-widget footer-widget--links">
                            <h2 class="footer-widget__title">Medical Rehabilitation</h2><!-- /.footer-widget__title -->
                            <ul class="list-unstyled footer-widget__links">
                                <li><a href="./medical-rehabilitation/stroke-treatment-rehab-physiotherapy" class="text-white">Stroke Care</a></li>
                                <li><a href="./medical-rehabilitation/spine-care-in-pune" class="text-white">Spine Care</a></li>
                                <li><a href="./medical-rehabilitation/trauma-care-in-pune" class="text-white">Trauma Care</a></li>
                                <li><a href="./medical-rehabilitation/orthopedic-care-in-pune" class="text-white">Orthopedic Care</a></li>
                                <li><a href="./medical-rehabilitation/postoperative-care-in-pune" class="text-white">Postoperative Care</a></li>
                                <li><a href="./medical-rehabilitation/oncology-care-in-pune" class="text-white">Oncology Care</a></li>
                                <li><a href="./medical-rehabilitation/neuro-care-in-pune" class="text-white">Neuro Care</a></li>
                                <li><a href="./medical-rehabilitation/paralysis-care-in-pune" class="text-white">Paralysis Care</a></li>
                            </ul><!-- /.list-unstyled footer-widget__links -->
                        </div><!-- /.footer-widget -->
                    </div>
                    
                   
                    <div class="col-md-6 col-lg-4 col-xl-3 wow fadeInUp" data-wow-duration="1500ms" data-wow-delay="200ms">
                        <div class="footer-widget footer-widget--links">
                            <h2 class="footer-widget__title">Specialized Therapies</h2><!-- /.footer-widget__title -->
                            <ul class="list-unstyled footer-widget__links">
                                <li><a href="./specialized-therapies/physiotherapy-in-pune" class="text-white">Physiotherapy</a></li>
                                <li><a href="./specialized-therapies/respiratory-therapy-in-pune" class="text-white">Respiratory Therapy</a></li>
                                <li><a href="./specialized-therapies/nutrition-therapy-in-pune" class="text-white">Nutrition Therapy</a></li>
                                <li><a href="./specialized-therapies/occupational-therapy-in-pune" class="text-white">Occupational Therapy</a>
                                </li>
                                <li><a href="./specialized-therapies/psychological-rehabilitation-therapy-in-pune"
                                    class="text-white">Psychological Rehab Therapy</a></li>
                                <li><a href="./specialized-therapies/integrative-therapy-in-pune" class="text-white">Integrative Therapy</a></li>
                                <li><a href="./specialized-therapies/speech-and-swallow-therapy-in-pune" class="text-white">Speech & Swallow
                                    Therapy</a></li>
                            </ul><!-- /.list-unstyled footer-widget__links -->
                        </div><!-- /.footer-widget -->
                    </div><!-- /.col-lg-6 -->
                    <div class="col-md-6 col-lg-4 col-xl-3 wow fadeInUp" data-wow-duration="1500ms" data-wow-delay="200ms">
                        <div class="footer-widget footer-widget--links">
                            <h2 class="footer-widget__title">Condition-Based Recovery</h2><!-- /.footer-widget__title -->
                            <ul class="list-unstyled footer-widget__links">
                                <li><a href="./condition-based-recovery/stroke-recovery-in-pune" class="text-white">Stroke Recovery</a></li>
                                <li><a href="./condition-based-recovery/spinal-cord-injury-in-pune" class="text-white">Spinal Cord Injury</a></li>
                                <li><a href="./condition-based-recovery/brain-injury-recovery-in-pune" class="text-white">Brain Injury Recovery</a></li>
                                <li><a href="./condition-based-recovery/multiple-sclerosis-in-pune" class="text-white">Multiple Sclerosis</a></li>
                                <li><a href="./condition-based-recovery/parkinsons-disease-in-pune" class="text-white">Parkinson's Disease</a></li>
                                <li><a href="./condition-based-recovery/cerebral-palsy-in-pune" class="text-white">Celebral Palsy</a></li>
                                <li><a href="./condition-based-recovery/pain-management-in-pune" class="text-white">Pain Management</a></li>
                                <li><a href="./condition-based-recovery/limb-loss-and-impairment-in-pune" class="text-white">Limb Loss &
                                        Impairment</a></li>
                            </ul><!-- /.list-unstyled footer-widget__links -->
                        </div><!-- /.footer-widget -->
                    </div><!-- /.col-lg-4 -->
                    <div class="col-md-6 col-lg-4 col-xl-3 wow fadeInUp" data-wow-duration="1500ms" data-wow-delay="600ms">
                        <div class="footer-widget footer-widget--contact">
                            <h2 class="footer-widget__title">Get in Touch</h2><!-- /.footer-widget__title -->
                            <address class="footer-widget__address text-white" >3rd Floor, Cherry Life, F Wing, Ganga Altus, 302, Thite Nagar, Kharadi, Pune, Maharashtra 411014</address>
                            <ul class="list-unstyled footer-widget__info">
                                <li>
                                    <span class="footer-widget__info__icon"><i class="icon-paper-plane"></i></span><!-- /.footer-widget__info__icon -->
                                    <a href="mailto:hello@apricotcare.in" class="text-white">hello@apricotcare.in</a>
                                </li>
                                <li>
                                    <span class="footer-widget__info__icon"><i class="icon-telephone"></i></span><!-- /.footer-widget__info__icon -->
                                    <a href="tel:+917387641462" class="text-white">+917387641462</a>
                                </li>
                            </ul><!-- /.list-unstyled -->
                        </div><!-- /.footer-widget -->
                    </div><!-- /.col-lg-5 -->
                    <!-- /.col-lg-5 -->
                </div>

                <div class="footer-location-list" style="margin-top:30px; margin-bottom:10px;">
                <button id="footerLocationToggleBtn" class="footer-widget__title" style="background:none; border:none;  color:white; cursor:pointer; padding:0;" type="button" aria-expanded="false" aria-controls="footerLocationList">
                    Our Location
                    <span id="footerLocationChevron" style="margin-left:12px;">
                        <i class="fas fa-chevron-down"></i>
                    </span>
                </button>
                <ul id="footerLocationList" class="list-unstyled footer-widget__links" style="display:none; margin-top:15px;">
                    <li><a href="physiotherapy-clinic-chandan-nagar" class="text-white">Physiotherapy Clinic in Kharadi, Pune</a></li>
                    <li><a href="physiotherapy-clinic-magarpatta-city" class="text-white">Physiotherapy Clinic in Magarpatta, Pune</a></li>
                    <li><a href="physiotherapy-clinic-viman-nagar" class="text-white">Physiotherapy Clinic in Viman Nagar, Pune</a></li>
                    <li><a href="physiotherapy-clinic-wadgaon-sheri" class="text-white">Physiotherapy Clinic in Wadgaon Sheri, Pune</a></li>
                    <li><a href="physiotherapy-clinic-wagholi" class="text-white">Physiotherapy Clinic in Wagholi, Pune</a></li>
                </ul>
            </div>
           
             
                
            </div><!-- /.container -->
            <div class="main-footer__bottom">
                <div class="container">
                    <div class="main-footer__bottom__inner">
                        <div class="social-links">
                            <a href="https://www.facebook.com/apricotcare">
                                <i class="fab fa-facebook-f text-white" aria-hidden="true"></i>
                                <span class="sr-only">Facebook</span>
                            </a>
                            <a href="https://x.com/care_apricot">
                                <i class="fab fa-twitter text-white" aria-hidden="true"></i>
                                <span class="sr-only">Twitter</span>
                            </a>
                            <a href="https://www.instagram.com/apricotcare_neurorehab_pune/">
                                <i class="fab fa-instagram text-white" aria-hidden="true"></i>
                                <span class="sr-only">Instagram</span>
                            </a>
                            <a href="https://www.youtube.com/@ApricotCare">
                                <i class="fab fa-youtube text-white" aria-hidden="true"></i>
                                <span class="sr-only">Youtube</span>
                            </a>
                        </div><!-- /.social-links -->
                        <p class="text-white">
                            <a href="https://publicmediasolution.com/" class="text-white">
                            Developed with Love by Public Media Solution</a><br>
                            Copyright © 2026. All Rights Reserved
                        </p>
                    </div><!-- /.main-footer__inner -->
                </div><!-- /.container -->
            </div><!-- /.main-footer__bottom -->
        </footer>`;
    }


}

class ServiceFooter extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
          
              <footer class="main-footer" style="background-color: teal;">
            <div class="main-footer__bg"></div>
            <!-- /.main-footer__bg -->
            <div class="container">
                <div class="main-footer__top wow fadeInUp" data-wow-duration="1500ms">
                    <div class="main-footer__top__bg" style="background-image: url(../assets/images/shapes/footer-top-bg.png);"></div><!-- /.main-footer__top__bg -->
                    <div class="main-footer__logo">
                        <a href="../">
                            <img src="../assets/images/home/Logo/Apricot Care Physiotherapy & Wellness, Kharad Pune (1).webp" width="153" height="60" alt="Sifoxen HTML Template">
                        </a>
                    </div><!-- /.main-footer__logo -->
                    <div class="main-footer__newsletter">
                        <div action="#" data-url="MAILCHIMP_FORM_URL" class="main-footer__newsletter__form mc-form d-flex" style="justify-content: space-between;">
                            <div class="main-footer__newsletter__inner">
                             <h3> Call us to book your appointment</h3> 
                            </div><!-- /.main-footer__newsletter__inner -->
                            <button  class="sifoxen-btn"> <a href="tel:+917387641462" class="text-white">Book Appointment</a></button>
                            </div>
                        <!-- /.footer-widget__newsletter__form mc-form -->
                        <div class="mc-form__response"></div><!-- /.mc-form__response -->
                    </div><!-- /.main-footer__newsletter -->

                    <div class="main-footer__shape">
                         <!-- /.main-footer__shape__image -->
                        <div class="main-footer__shape__box"></div><!-- /.main-footer__shape__box -->
                    </div><!-- /.main-footer__shape -->
                </div><!-- /.main-footer__top -->
                <div class="row gutter-y-40 mb-5">
                    <div class="col-md-6 col-lg- col-xl-4 wow fadeInUp" data-wow-duration="1500ms" data-wow-delay="00ms">
                        <div class="footer-widget footer-widget--about">
                            <h2 class="footer-widget__title">about </h2><!-- /.footer-widget__title -->
                            <p class="footer-widget__about-text text-white">Empowering Healing and Growth through Expert Physiotherapy and Holistic Care</p><!-- /.footer-widget__about-text -->
                            <a href="contact" class="footer-widget__btn sifoxen-btn">book appointment</a><!-- /.sifoxen-btn -->
                        </div><!-- /.footer-widget -->
                    </div><!-- /.col-lg-4 -->

                    <div class="col-md-6 col-lg-4 col-xl-4 wow fadeInUp" data-wow-duration="1500ms" data-wow-delay="200ms">
                        <div class="footer-widget footer-widget--links">
                            <h2 class="footer-widget__title">Advanced Care Programs</h2><!-- /.footer-widget__title -->
                            <ul class="list-unstyled footer-widget__links text-white">
                                <li><a href="../advanced-care-programs/feeding-tube-care-in-pune" class="text-white">Feeding Tube Care</a></li>
                                <li><a href="../advanced-care-programs/cardiac-rehabilitation-in-pune" class="text-white">Cardiac Rehabilitation Care</a></li>
                                <li><a href="../advanced-care-programs/senior-care-in-pune" class="text-white">Senior Care</a></li>
                                <li><a href="../advanced-care-programs/alzheimers-dementia-care-in-pune" class="text-white">Alzheimer’s Care</a></li>
                                <li><a href="../advanced-care-programs/parkinsons-care-in-pune" class="text-white">Parkinson's Care</a></li>
                            </ul><!-- /.list-unstyled footer-widget__links -->
                        </div><!-- /.footer-widget -->
                    </div><!-- /.col-lg-6 -->
                    <div class="col-md-6 col-lg-4 col-xl-4 wow fadeInUp" data-wow-duration="1500ms" data-wow-delay="200ms">
                        <div class="footer-widget footer-widget--links">
                            <ul class="list-unstyled footer-widget__links">
                                <li><a href="../advanced-care-programs/craniotomy-care-in-pune" class="text-white">Carniotomy Care</a></li>
                                <li><a href="../advanced-care-programs/oncology-care-in-pune" class="text-white">Oncology Rehabilitation</a></li>
                                <li><a href="../advanced-care-programs/tracheostomy-care-in-pune" class="text-white">Tracheostomy Care</a></li>
                                <li><a href="../advanced-care-programs/tkr-thr-knee-hip-replacement-care-in-pune" class="text-white">TKR/THR(Knee/Hip/Replacement) Care</a></li>
                                <li><a href="../advanced-care-programs/bedsore-management-in-pune" class="text-white">Bedsore Management</a></li>
                               <li><a href="../advanced-care-programs/transitional-care-in-pune" class="text-white">Transitional Care</a></li> 

                            </ul><!-- /.list-unstyled footer-widget__links -->
                        </div><!-- /.footer-widget -->
                    </div>
                  
                  
                </div><!-- /.row -->
                 <div class="row gutter-y-40">
                  
                    <div class="col-md-6 col-lg-4 col-xl-3 wow fadeInUp" data-wow-duration="1500ms" data-wow-delay="200ms">
                        <div class="footer-widget footer-widget--links">
                            <h2 class="footer-widget__title">Medical Rehabilitation</h2><!-- /.footer-widget__title -->
                            <ul class="list-unstyled footer-widget__links">
                                <li><a href="../medical-rehabilitation/stroke-treatment-rehab-physiotherapy" class="text-white">Stroke Care</a></li>
                                <li><a href="../medical-rehabilitation/spine-care-in-pune" class="text-white">Spine Care</a></li>
                                <li><a href="../medical-rehabilitation/trauma-care-in-pune" class="text-white">Trauma Care</a></li>
                                <li><a href="../medical-rehabilitation/orthopedic-care-in-pune" class="text-white">Orthopedic Care</a></li>
                                <li><a href="../medical-rehabilitation/postoperative-care-in-pune" class="text-white">Postoperative Care</a></li>
                                <li><a href="../medical-rehabilitation/oncology-care-in-pune" class="text-white">Oncology Care</a></li>
                                <li><a href="../medical-rehabilitation/neuro-care-in-pune" class="text-white">Neuro Care</a></li>
                                <li><a href="../medical-rehabilitation/paralysis-care-in-pune" class="text-white">Paralysis Care</a></li>
                            </ul><!-- /.list-unstyled footer-widget__links -->
                        </div><!-- /.footer-widget -->
                    </div>
                    
                   
                    <div class="col-md-6 col-lg-4 col-xl-3 wow fadeInUp" data-wow-duration="1500ms" data-wow-delay="200ms">
                        <div class="footer-widget footer-widget--links">
                            <h2 class="footer-widget__title">Specialized Therapies</h2><!-- /.footer-widget__title -->
                            <ul class="list-unstyled footer-widget__links">
                                <li><a href="../specialized-therapies/physiotherapy-in-pune" class="text-white">Physiotherapy</a></li>
                                <li><a href="../specialized-therapies/respiratory-therapy-in-pune" class="text-white">Respiratory Therapy</a></li>
                                <li><a href="../specialized-therapies/nutrition-therapy-in-pune" class="text-white">Nutrition Therapy</a></li>
                                <li><a href="../specialized-therapies/occupational-therapy-in-pune" class="text-white">Occupational Therapy</a></li>
                                <li><a href="../specialized-therapies/psychological-rehabilitation-therapy-in-pune" class="text-white">Psychological Rehab Therapy</a></li>
                                <li><a href="../specialized-therapies/integrative-therapy-in-pune" class="text-white">Integrative Therapy</a></li>
                                <li><a href="../specialized-therapies/speech-and-swallow-therapy-in-pune" class="text-white">Speech & Swallow Therapy</a></li>

                            </ul><!-- /.list-unstyled footer-widget__links -->
                        </div><!-- /.footer-widget -->
                    </div><!-- /.col-lg-6 -->
                    <div class="col-md-6 col-lg-4 col-xl-3 wow fadeInUp" data-wow-duration="1500ms" data-wow-delay="200ms">
                        <div class="footer-widget footer-widget--links">
                            <h2 class="footer-widget__title">Condition-Based Recovery</h2><!-- /.footer-widget__title -->
                            <ul class="list-unstyled footer-widget__links">
                                <li><a href="../condition-based-recovery/stroke-recovery-in-pune" class="text-white">Stroke Recovery</a></li>
                                <li><a href="../condition-based-recovery/spinal-cord-injury-in-pune" class="text-white">Spinal Cord Injury</a></li>
                                <li><a href="../condition-based-recovery/brain-injury-recovery-in-pune" class="text-white">Brain Injury Recovery</a></li>
                                <li><a href="../condition-based-recovery/multiple-sclerosis-in-pune" class="text-white">Multiple Sclerosis</a></li>
                                <li><a href="../condition-based-recovery/parkinsons-disease-in-pune" class="text-white">Parkinson's Disease</a></li>
                                <li><a href="../condition-based-recovery/cerebral-palsy-in-pune" class="text-white">Celebral Palsy</a></li>
                                <li><a href="../condition-based-recovery/pain-management-in-pune" class="text-white">Pain Management</a></li>
                                <li><a href="../condition-based-recovery/limb-loss-and-impairment-in-pune" class="text-white">Limb Loss & Impairment</a></li>


                            </ul><!-- /.list-unstyled footer-widget__links -->
                        </div><!-- /.footer-widget -->
                    </div><!-- /.col-lg-4 -->
                    <div class="col-md-6 col-lg-4 col-xl-3 wow fadeInUp" data-wow-duration="1500ms" data-wow-delay="600ms">
                        <div class="footer-widget footer-widget--contact">
                            <h2 class="footer-widget__title">Get in Touch</h2><!-- /.footer-widget__title -->
                            <address class="footer-widget__address text-white" >3rd Floor, Cherry Life, F Wing, Ganga Altus, 302, Thite Nagar, Kharadi, Pune, Maharashtra 411014</address>
                            <ul class="list-unstyled footer-widget__info">
                                <li>
                                    <span class="footer-widget__info__icon"><i class="icon-paper-plane"></i></span><!-- /.footer-widget__info__icon -->
                                    <a href="mailto:hello@apricotcare.in" class="text-white">hello@apricotcare.in</a>
                                </li>
                                <li>
                                    <span class="footer-widget__info__icon"><i class="icon-telephone"></i></span><!-- /.footer-widget__info__icon -->
                                    <a href="tel:+917387641462" class="text-white">+917387641462</a>
                                </li>
                            </ul><!-- /.list-unstyled -->
                        </div><!-- /.footer-widget -->
                    </div><!-- /.col-lg-5 -->
                    <!-- /.col-lg-5 -->
                </div>

                <div class="footer-location-list" style="margin-top:30px; margin-bottom:10px;">
                <button id="footerLocationToggleBtn" class="footer-widget__title" style="background:none; border:none;  color:white; cursor:pointer; padding:0;" type="button" aria-expanded="false" aria-controls="footerLocationList">
                    Our Location
                    <span id="footerLocationChevron" style="margin-left:12px;">
                        <i class="fas fa-chevron-down"></i>
                    </span>
                </button>
                <ul id="footerLocationList" class="list-unstyled footer-widget__links" style="display:none; margin-top:15px;">
                    <li><a href="../physiotherapy-clinic-chandan-nagar" class="text-white">Physiotherapy Clinic in Kharadi, Pune</a></li>
                    <li><a href="../physiotherapy-clinic-magarpatta-city" class="text-white">Physiotherapy Clinic in Magarpatta, Pune</a></li>
                    <li><a href="../physiotherapy-clinic-viman-nagar" class="text-white">Physiotherapy Clinic in Viman Nagar, Pune</a></li>
                    <li><a href="../physiotherapy-clinic-wadgaon-sheri" class="text-white">Physiotherapy Clinic in Wadgaon Sheri, Pune</a></li>
                    <li><a href="../physiotherapy-clinic-wagholi" class="text-white">Physiotherapy Clinic in Wagholi, Pune</a></li>
                </ul>
            </div>
           
            </div><!-- /.container -->
            <div class="main-footer__bottom">
                <div class="container">
                    <div class="main-footer__bottom__inner">
                        <div class="social-links">
                            <a href="https://www.facebook.com/apricotcare">
                                <i class="fab fa-facebook-f text-white" aria-hidden="true"></i>
                                <span class="sr-only">Facebook</span>
                            </a>
                            <a href="https://x.com/care_apricot">
                                <i class="fab fa-twitter text-white" aria-hidden="true"></i>
                                <span class="sr-only">Twitter</span>
                            </a>
                            <a href="https://www.instagram.com/apricotcare_neurorehab_pune/">
                                <i class="fab fa-instagram text-white" aria-hidden="true"></i>
                                <span class="sr-only">Instagram</span>
                            </a>
                            <a href="https://www.youtube.com/@ApricotCare">
                                <i class="fab fa-youtube text-white" aria-hidden="true"></i>
                                <span class="sr-only">Youtube</span>
                            </a>
                        </div><!-- /.social-links -->
                        <p class="text-white">
                            <a href="https://publicmediasolution.com/" class="text-white">
                            Developed with Love by Public Media Solution</a><br>
                            Copyright © 2026. All Rights Reserved
                        </p>
                    </div><!-- /.main-footer__inner -->
                </div><!-- /.container -->
            </div><!-- /.main-footer__bottom -->
        </footer>`;
    }


}

class ServiceHeader extends HTMLElement {
    connectedCallback() {

        this.innerHTML = `


     <header class="main-header main-header--one sticky-header sticky-header--normal">
            <div class="main-header__bg" style="background-image: url(../assets/images/shapes/header-shape-bg-1-1.png);"></div><!-- /.main-header__bg -->
            <div class="topbar-one">
                <div class="container-fluid">
                    <div class="topbar-one__inner">
                        <ul class="list-unstyled topbar-one__info">
                            <li>
                                <span class="topbar-one__info__icon">
                                    <i class="icon-mail"></i>
                                </span>
                                <a href="mailto:hello@apricotcare.in" class="text-white">hello@apricotcare.in</a>
                            </li>
                            <li>
                                <span class="topbar-one__info__icon topbar-one__info__icon--phone">
                                    <i class="icon-phone-call"></i>
                                </span>
                                <a href="tel:+917387641462" class="text-white">+917387641462</a>
                            </li>
                        </ul><!-- /.list-unstyled topbar-one__info -->
                        <div class="topbar-one__right">
                            <div class="topbar-one__open">
                                <span class="topbar-one__open__icon">
                                    <i class="icon-clock"></i>
                                </span>
                                <p class="topbar-one__open__text text-white">Mon to Sun 8:00am to 8:00pm</p><!-- /.topbar-one__open__text -->
                            </div><!-- /.topbar-one__open -->
                            <div class="topbar-one__social">
                                <a href="https://www.facebook.com/apricotcare">
                                    <i class="fab fa-facebook-f" aria-hidden="true"></i>
                                    <span class="sr-only">Facebook</span>
                                </a>
                                <a href="https://x.com/care_apricot">
                                    <i class="fab fa-twitter" aria-hidden="true"></i>
                                    <span class="sr-only">Twitter</span>
                                </a>
                                <a href="https://www.instagram.com/apricotcare_neurorehab_pune/">
                                    <i class="fab fa-instagram" aria-hidden="true"></i>
                                    <span class="sr-only">Instagram</span>
                                </a>
                                <a href="https://www.youtube.com/@ApricotCare">
                                    <i class="fab fa-youtube" aria-hidden="true"></i>
                                    <span class="sr-only">Youtube</span>
                                </a>
                            </div><!-- /.topbar-one__social -->
                        </div><!-- /.topbar-one__right -->
                    </div><!-- /.topbar-one__inner -->
                </div><!-- /.container-fluid -->
            </div><!-- /.topbar-one -->
            <div class="container-fluid">    
                <div class="main-header__inner">
                    <div class="main-header__logo">
                        <a href="../">
                            <img src="../assets/images/home/Logo/Apricot Care Physiotherapy & Wellness, Kharad Pune (1).webp" alt="Sifoxen HTML" width="153" height="60">
                        </a>
                    </div><!-- /.main-header__logo -->
                    <div class="main-header__right">
                        <nav class="main-header__nav main-menu">
                            <ul class="main-menu__list">

                                <li class=" megamenu">
                                    <a href="../">Home</a>
                                   
                                </li>

                                <li class="dropdown">
                                    <a href="#">Rehabilitation</a>
                                    <ul class="drpdwn-container">
                                        <li class="dropdown">
                                            <a href="#">Medical Rehabilitation</a>
                                            <ul class="sub-menu drpdwn-container">
                                                <li><a href="../medical-rehabilitation/stroke-treatment-rehab-physiotherapy">Stroke Care</a></li>
                                                <li><a href="../medical-rehabilitation/spine-care-in-pune">Spine Care</a></li>
                                                <li><a href="../medical-rehabilitation/trauma-care-in-pune">Trauma Care</a></li>
                                                <li><a href="../medical-rehabilitation/orthopedic-care-in-pune">Orthopedic Care</a></li>
                                                <li><a href="../medical-rehabilitation/postoperative-care-in-pune">Postoperative Care</a></li>
                                                <li><a href="../medical-rehabilitation/oncology-care-in-pune">Oncology Care</a></li>
                                                <li><a href="../medical-rehabilitation/neuro-care-in-pune">Neuro Care</a></li>
                                                <li><a href="../medical-rehabilitation/paralysis-care-in-pune">Paralysis Care</a></li>
                                            </ul>
                                        </li>
                                         <li class="dropdown">
                                            <a href="#">Specialized Therapies</a>
                                            <ul class="sub-menu drpdwn-container">
                                                <li><a href="../specialized-therapies/physiotherapy-in-pune">Physiotherapy</a></li>
                                                <li><a href="../specialized-therapies/respiratory-therapy-in-pune">Respiratory Therapy</a></li>
                                                <li><a href="../specialized-therapies/nutrition-therapy-in-pune">Nutrition Therapy</a></li>
                                                <li><a href="../specialized-therapies/occupational-therapy-in-pune">Occupational Therapy</a></li>
                                                <li><a href="../specialized-therapies/psychological-rehabilitation-therapy-in-pune">Psychological Rehab Therapy</a></li>
                                                <li><a href="../specialized-therapies/integrative-therapy-in-pune">Integrative Therapy</a></li>
                                                <li><a href="../specialized-therapies/speech-and-swallow-therapy-in-pune">Speech & Swallow Therapy</a></li>
                                            </ul>
                                        </li>
                                        <li class="dropdown">
                                            <a href="#">Condition-Based Recovery</a>
                                            <ul class="sub-menu drpdwn-container">
                                                <li><a href="../condition-based-recovery/stroke-recovery-in-pune">Stroke Recovery</a></li>
                                                <li><a href="../condition-based-recovery/spinal-cord-injury-in-pune">Spinal Cord Injury</a></li>
                                                <li><a href="../condition-based-recovery/brain-injury-recovery-in-pune">Brain Injury Recovery</a></li>
                                                <li><a href="../condition-based-recovery/multiple-sclerosis-in-pune">Multiple Sclerosis</a></li>
                                                <li><a href="../condition-based-recovery/parkinsons-disease-in-pune">Parkinson's Disease</a></li>
                                                <li><a href="../condition-based-recovery/cerebral-palsy-in-pune">Cerebral Palsy</a></li>
                                                <li><a href="../condition-based-recovery/pain-management-in-pune">Pain Management</a></li>
                                                <li><a href="../condition-based-recovery/limb-loss-and-impairment-in-pune">Limb Loss & Impairment</a></li>
                                            </ul>
                                        </li>
                                        <li class="dropdown">
                                            <a href="#">Advanced Care Programs</a>
                                            <ul class="sub-menu drpdwn-container adv-drop-dwn">
                                                <li><a href="../advanced-care-programs/feeding-tube-care-in-pune">Feeding Tube Care</a></li>
                                                <li><a href="../advanced-care-programs/cardiac-rehabilitation-in-pune">Cardiac Rehabilitation Care</a></li>
                                                <li><a href="../advanced-care-programs/senior-care-in-pune">Senior Care</a></li>
                                                <li><a href="../advanced-care-programs/alzheimers-dementia-care-in-pune">Alzheimer’s Care</a></li>
                                                <li><a href="../advanced-care-programs/parkinsons-care-in-pune">Parkinson's Care</a></li>
                                                <li><a href="../advanced-care-programs/craniotomy-care-in-pune">Craniotomy Care</a></li>
                                                <li><a href="../advanced-care-programs/oncology-rehabilitation-in-pune">Oncology Rehabilitation</a></li>
                                                <li><a href="../advanced-care-programs/tracheostomy-care-in-pune">Tracheostomy Care</a></li>
                                                <li><a href="../advanced-care-programs/tkr-thr-knee-hip-replacement-care-in-pune">TKR/THR (Knee/Hip Replacement) Care</a></li>
                                                <li><a href="../advanced-care-programs/bedsore-management-in-pune">Bedsore Management</a></li>
                                               <li><a href="../advanced-care-programs/transitional-care-in-pune">Transitional Care</a></li> 
                                            </ul>
                                        </li>
                                    </ul>
                                </li>

                                <li class="dropdown">
                                    <a href="#">Home Care</a>
                                    <ul class="drpdwn-container">
                                        <li><a href="../caregiver-services">Caregiver</a></li>
                                        <li><a href="../nursing-care-at-home-in-pune">Nursing</a></li>
                                        <li><a href="../icu-care-at-home">ICU at Home</a></li>
                                    </ul>
                                </li>

                                <li class="dropdown">
                                    <a href="/online-therapy/">Online Therapy</a>
                                    <ul class="drpdwn-container" >
                                        <li><a href="../online-therapy#online-consultation">Online Consultation</a></li>
                                        <li><a href="../online-therapy#video-therapy-session">Video Therapy Sessions</a></li>
                                        <li><a href="../online-therapy#psychological-consuling">Online Psychological Counseling</a></li>
                                        <li><a href="../online-therapy#nutrition-guidance">Online Nutrition Guidance</a></li>
                                        <li><a href="../online-therapy#vr-monitoring">Virtual Recovery Monitoring</a></li>
                                    </ul>
                                </li>

                                <li class="dropdown">
                                    <a href="../about">About us </a>
                                     <ul class="drpdwn-container">
                                        <li><a href="../neuro-physiotherapist-in-pune/">Our Experts</a></li>
                                    </ul>

                                </li>
                                 
                                <li>
                                    <a href="../blog">Blog</a>
                                </li>
                            </ul>
                        </nav><!-- /.main-header__nav -->
                        <div class="mobile-nav__btn mobile-nav__toggler">
                            <span></span>
                            <span></span>
                            <span></span>
                        </div><!-- /.mobile-nav__toggler -->
                       
                        <a href="../contact" class="sifoxen-btn main-header__btn">
                            book appointment
                        </a> <!-- /.thm-btn main-header__btn -->
                    </div><!-- /.main-header__right -->
                </div><!-- /.main-header__inner -->
            </div><!-- /.container-fluid -->
        </header>`



    }
}

class ServiceHeader2 extends HTMLElement {
    connectedCallback() {

        this.innerHTML = `


     <header class="main-header main-header--one sticky-header sticky-header--normal">
            <div class="main-header__bg" style="background-image: url(../assets/images/shapes/header-shape-bg-1-1.png);"></div><!-- /.main-header__bg -->
            <div class="topbar-one">
                <div class="container-fluid">
                    <div class="topbar-one__inner">
                        <ul class="list-unstyled topbar-one__info">
                            <li>
                                <span class="topbar-one__info__icon">
                                    <i class="icon-mail"></i>
                                </span>
                                <a href="mailto:hello@apricotcare.in" class="text-white">hello@apricotcare.in</a>
                            </li>
                            <li>
                                <span class="topbar-one__info__icon topbar-one__info__icon--phone">
                                    <i class="icon-phone-call"></i>
                                </span>
                                <a href="tel:+917387641462" class="text-white">+917387641462</a>
                            </li>
                        </ul><!-- /.list-unstyled topbar-one__info -->
                        <div class="topbar-one__right">
                            <div class="topbar-one__open">
                                <span class="topbar-one__open__icon">
                                    <i class="icon-clock"></i>
                                </span>
                                <p class="topbar-one__open__text text-white">Mon to Sun 8:00am to 8:00pm</p><!-- /.topbar-one__open__text -->
                            </div><!-- /.topbar-one__open -->
                            <div class="topbar-one__social">
                                <a href="https://www.facebook.com/apricotcare">
                                    <i class="fab fa-facebook-f" aria-hidden="true"></i>
                                    <span class="sr-only">Facebook</span>
                                </a>
                                <a href="https://x.com/care_apricot">
                                    <i class="fab fa-twitter" aria-hidden="true"></i>
                                    <span class="sr-only">Twitter</span>
                                </a>
                                <a href="https://www.instagram.com/apricotcare_neurorehab_pune">
                                    <i class="fab fa-instagram" aria-hidden="true"></i>
                                    <span class="sr-only">Instagram</span>
                                </a>
                                <a href="https://www.youtube.com/@ApricotCare">
                                    <i class="fab fa-youtube" aria-hidden="true"></i>
                                    <span class="sr-only">Youtube</span>
                                </a>
                            </div><!-- /.topbar-one__social -->
                        </div><!-- /.topbar-one__right -->
                    </div><!-- /.topbar-one__inner -->
                </div><!-- /.container-fluid -->
            </div><!-- /.topbar-one -->
            <div class="container-fluid">    
                <div class="main-header__inner">
                    <div class="main-header__logo">
                        <a href="/">
                            <img src="../assets/images/home/Logo/Apricot Care Physiotherapy & Wellness, Kharad Pune (1).webp" alt="Sifoxen HTML" width="153" height="60">
                        </a>
                    </div><!-- /.main-header__logo -->
                    <div class="main-header__right">
                        <nav class="main-header__nav main-menu">
                            <ul class="main-menu__list">

                                <li class=" megamenu">
                                    <a href="/">Home</a>
                                   
                                </li>

                                <li class="dropdown">
                                    <a href="#">Rehabilitation</a>
                                    <ul class="drpdwn-container">
                                        <li class="dropdown">
                                            <a href="#">Medical Rehabilitation</a>
                                            <ul class="sub-menu drpdwn-container">
                                                <li><a href="../medical-rehabilitation/stroke-treatment-rehab-physiotherapy">Stroke Care</a></li>
                                                <li><a href="../medical-rehabilitation/spine-care-in-pune">Spine Care</a></li>
                                                <li><a href="../medical-rehabilitation/trauma-care-in-pune">Trauma Care</a></li>
                                                <li><a href="../medical-rehabilitation/orthopedic-care-in-pune">Orthopedic Care</a></li>
                                                <li><a href="../medical-rehabilitation/postoperative-care-in-pune">Postoperative Care</a></li>
                                                <li><a href="../medical-rehabilitation/oncology-care-in-pune">Oncology Care</a></li>
                                                <li><a href="../medical-rehabilitation/neuro-care-in-pune">Neuro Care</a></li>
                                                <li><a href="../medical-rehabilitation/paralysis-care-in-pune">Paralysis Care</a>
                                                </li>
                                            </ul>
                                        </li>
                                        <li class="dropdown">
                                            <a href="#">Specialized Therapies</a>
                                            <ul class="sub-menu drpdwn-container">
                                                <li><a href="./physiotherapy-in-pune">Physiotherapy</a></li>
                                                <li><a href="./respiratory-therapy-in-pune">Respiratory Therapy</a></li>
                                                <li><a href="./nutrition-therapy-in-pune">Nutrition Therapy</a></li>
                                                <li><a href="./occupational-therapy-in-pune">Occupational Therapy</a></li>
                                                <li><a href="./psychological-rehabilitation-therapy-in-pune">Psychological Rehab Therapy</a></li>
                                                <li><a href="./integrative-therapy-in-pune">Integrative Therapy</a></li>
                                                <li><a href="./speech-and-swallow-therapy-in-pune">Speech & Swallow Therapy</a></li>
                                            </ul>
                                        </li>
                                        <li class="dropdown">
                                            <a href="#">Condition-Based Recovery</a>
                                            <ul class="sub-menu drpdwn-container">
                                                <li><a href="../condition-based-recovery/stroke-recovery-in-pune">Stroke Recovery</a></li>
                                                <li><a href="../condition-based-recovery/spinal-cord-injury-in-pune">Spinal Cord Injury</a></li>
                                                <li><a href="../condition-based-recovery/brain-injury-recovery-in-pune">Brain Injury Recovery</a></li>
                                                <li><a href="../condition-based-recovery/multiple-sclerosis-in-pune">Multiple Sclerosis</a></li>
                                                <li><a href="../condition-based-recovery/parkinsons-disease-in-pune">Parkinson's Disease</a></li>
                                                <li><a href="../condition-based-recovery/cerebral-palsy-in-pune">Cerebral Palsy</a></li>
                                                <li><a href="../condition-based-recovery/pain-management-in-pune">Pain Management</a></li>
                                                <li><a href="../condition-based-recovery/limb-loss-and-impairment-in-pune">Limb Loss & Impairment</a></li>
                                            </ul>
                                        </li>
                                        <li class="dropdown">
                                            <a href="#">Advanced Care Programs</a>
                                            <ul class="sub-menu drpdwn-container adv-drop-dwn">
                                                <li><a href="../advanced-care-programs/feeding-tube-care-in-pune">Feeding Tube Care</a></li>
                                                <li><a href="../advanced-care-programs/cardiac-rehabilitation-in-pune">Cardiac Rehabilitation Care</a></li>
                                                <li><a href="../advanced-care-programs/senior-care-in-pune">Senior Care</a></li>
                                                <li><a href="../advanced-care-programs/alzheimers-dementia-care-in-pune">Alzheimer’s Care</a></li>
                                                <li><a href="../advanced-care-programs/parkinsons-care-in-pune">Parkinson's Care</a></li>
                                                <li><a href="../advanced-care-programs/craniotomy-care-in-pune">Craniotomy Care</a></li>
                                                <li><a href="../advanced-care-programs/oncology-rehabilitation-in-pune">Oncology Rehabilitation</a></li>
                                                <li><a href="../advanced-care-programs/tracheostomy-care-in-pune">Tracheostomy Care</a></li>
                                                <li><a href="../advanced-care-programs/tkr-thr-knee-hip-replacement-care-in-pune">TKR/THR (Knee/Hip Replacement) Care</a></li>
                                                <li><a href="../advanced-care-programs/bedsore-management-in-pune">Bedsore Management</a></li>
                                               <li><a href="../advanced-care-programs/transitional-care-in-pune">Transitional Care</a></li> 
                                            </ul>
                                        </li>
                                    </ul>
                                </li>

                                <li class="dropdown">
                                    <a href="#">Home Care</a>
                                    <ul class="drpdwn-container">
                                        <li><a href="../caregiver-services">Caregiver</a></li>
                                        <li><a href="../nursing-care-at-home-in-pune">Nursing</a></li>
                                        <li><a href="../icu-care-at-home">ICU at Home</a></li>
                                    </ul>
                                </li>

                                <li class="dropdown">
                                    <a href="/online-therapy">Online Therapy</a>
                                    <ul class="drpdwn-container">
                                        <li><a href="../online-therapy#online-consultation">Online Consultation</a></li>
                                        <li><a href="../online-therapy#video-therapy-session">Video Therapy Sessions</a></li>
                                        <li><a href="../online-therapy#psychological-consuling">Online Psychological Counseling</a></li>
                                        <li><a href="../online-therapy#nutrition-guidance">Online Nutrition Guidance</a></li>
                                        <li><a href="../online-therapy#vr-monitoring">Virtual Recovery Monitoring</a></li>
                                    </ul>
                                </li>

                                <li class="dropdown">
                                    <a href="../about">About us </a>
                                    <ul class="drpdwn-container">
                                        <li><a href="../neuro-physiotherapist-in-pune">Our Experts</a></li>
                                    </ul>

                                </li>
                                 
                                <li>
                                    <a href="../blog">Blog</a>
                                </li>
                            </ul>
                        </nav><!-- /.main-header__nav -->
                        <div class="mobile-nav__btn mobile-nav__toggler">
                            <span></span>
                            <span></span>
                            <span></span>
                        </div><!-- /.mobile-nav__toggler -->
                       
                        <a href="../contact" class="sifoxen-btn main-header__btn">
                            book appointment
                        </a> <!-- /.thm-btn main-header__btn -->
                    </div><!-- /.main-header__right -->
                </div><!-- /.main-header__inner -->
            </div><!-- /.container-fluid -->
        </header>`



    }
}

class ServiceHeader3 extends HTMLElement {
    connectedCallback() {

        this.innerHTML = `


     <header class="main-header main-header--one sticky-header sticky-header--normal">
            <div class="main-header__bg" style="background-image: url(../assets/images/shapes/header-shape-bg-1-1.png);"></div><!-- /.main-header__bg -->
            <div class="topbar-one">
                <div class="container-fluid">
                    <div class="topbar-one__inner">
                        <ul class="list-unstyled topbar-one__info">
                            <li>
                                <span class="topbar-one__info__icon">
                                    <i class="icon-mail"></i>
                                </span>
                                <a href="mailto:hello@apricotcare.in" class="text-white">hello@apricotcare.in</a>
                            </li>
                            <li>
                                <span class="topbar-one__info__icon topbar-one__info__icon--phone">
                                    <i class="icon-phone-call"></i>
                                </span>
                                <a href="tel:+917387641462" class="text-white">+917387641462</a>
                            </li>
                        </ul><!-- /.list-unstyled topbar-one__info -->
                        <div class="topbar-one__right">
                            <div class="topbar-one__open">
                                <span class="topbar-one__open__icon">
                                    <i class="icon-clock"></i>
                                </span>
                                <p class="topbar-one__open__text text-white">Mon to Sun 8:00am to 8:00pm</p><!-- /.topbar-one__open__text -->
                            </div><!-- /.topbar-one__open -->
                            <div class="topbar-one__social">
                                <a href="https://www.facebook.com/apricotcare">
                                    <i class="fab fa-facebook-f" aria-hidden="true"></i>
                                    <span class="sr-only">Facebook</span>
                                </a>
                                <a href="https://x.com/care_apricot">
                                    <i class="fab fa-twitter" aria-hidden="true"></i>
                                    <span class="sr-only">Twitter</span>
                                </a>
                                <a href="https://www.instagram.com/apricotcare_neurorehab_pune/">
                                    <i class="fab fa-instagram" aria-hidden="true"></i>
                                    <span class="sr-only">Instagram</span>
                                </a>
                                <a href="https://www.youtube.com/@ApricotCare">
                                    <i class="fab fa-youtube" aria-hidden="true"></i>
                                    <span class="sr-only">Youtube</span>
                                </a>
                            </div><!-- /.topbar-one__social -->
                        </div><!-- /.topbar-one__right -->
                    </div><!-- /.topbar-one__inner -->
                </div><!-- /.container-fluid -->
            </div><!-- /.topbar-one -->
            <div class="container-fluid">    
                <div class="main-header__inner">
                    <div class="main-header__logo">
                        <a href="../">
                            <img src="../assets/images/home/Logo/Apricot Care Physiotherapy & Wellness, Kharad Pune (1).webp" alt="Sifoxen HTML" width="153" height="60">                        </a>
                    </div><!-- /.main-header__logo -->
                    <div class="main-header__right">
                        <nav class="main-header__nav main-menu">
                            <ul class="main-menu__list">

                                <li class=" megamenu">
                                    <a href="../">Home</a>
                                   
                                </li>

                                <li class="dropdown">
                                    <a href="#">Rehabilitation</a>
                                    <ul class="drpdwn-container">
                                        <li class="dropdown">
                                            <a href="#">Medical Rehabilitation</a>
                                            <ul class="sub-menu drpdwn-container">
                                                <li><a href="../medical-rehabilitation/stroke-treatment-rehab-physiotherapy">Stroke Care</a></li>
                                                <li><a href="../medical-rehabilitation/spine-care-in-pune">Spine Care</a></li>
                                                <li><a href="../medical-rehabilitation/trauma-care-in-pune">Trauma Care</a></li>
                                                <li><a href="../medical-rehabilitation/orthopedic-care-in-pune">Orthopedic Care</a></li>
                                                <li><a href="../medical-rehabilitation/postoperative-care-in-pune">Postoperative Care</a></li>
                                                <li><a href="../medical-rehabilitation/oncology-care-in-pune">Oncology Care</a></li>
                                                <li><a href="../medical-rehabilitation/neuro-care-in-pune">Neuro Care</a></li>
                                                <li><a href="../medical-rehabilitation/paralysis-care-in-pune">Paralysis Care</a>
                                                </li>
                                            </ul>
                                        </li>
                                        <li class="dropdown">
                                            <a href="#">Specialized Therapies</a>
                                            <ul class="sub-menu drpdwn-container">
                                                <li><a href="../specialized-therapies/physiotherapy-in-pune">Physiotherapy</a></li>
                                                <li><a href="../specialized-therapies/respiratory-therapy-in-pune">Respiratory Therapy</a></li>
                                                <li><a href="../specialized-therapies/nutrition-therapy-in-pune">Nutrition Therapy</a></li>
                                                <li><a href="../specialized-therapies/occupational-therapy-in-pune">Occupational Therapy</a></li>
                                                <li><a href="../specialized-therapies/psychological-rehabilitation-therapy-in-pune">Psychological Rehab Therapy</a></li>
                                                <li><a href="../specialized-therapies/integrative-therapy-in-pune">Integrative Therapy</a></li>
                                                <li><a href="../specialized-therapies/speech-and-swallow-therapy-in-pune">Speech & Swallow Therapy</a></li>
                                            </ul>
                                        </li>
                                        <li class="dropdown">
                                            <a href="#">Condition-Based Recovery</a>
                                            <ul class="sub-menu drpdwn-container">
                                                <li><a href="./stroke-recovery-in-pune">Stroke Recovery</a></li>
                                                <li><a href="./spinal-cord-injury-in-pune">Spinal Cord Injury</a></li>
                                                <li><a href="./brain-injury-recovery-in-pune">Brain Injury Recovery</a></li>
                                                <li><a href="./multiple-sclerosis-in-pune">Multiple Sclerosis</a></li>
                                                <li><a href="./parkinsons-disease-in-pune">Parkinson's Disease</a></li>
                                                <li><a href="./cerebral-palsy-in-pune">Cerebral Palsy</a></li>
                                                <li><a href="./pain-management-in-pune">Pain Management</a></li>
                                                <li><a href="./limb-loss-and-impairment-in-pune">Limb Loss & Impairment</a></li>
                                            </ul>
                                        </li>
                                        <li class="dropdown">
                                            <a href="#">Advanced Care Programs</a>
                                            <ul class="sub-menu drpdwn-container adv-drop-dwn">
                                                <li><a href="../advanced-care-programs/feeding-tube-care-in-pune">Feeding Tube Care</a></li>
                                                <li><a href="../advanced-care-programs/cardiac-rehabilitation-in-pune">Cardiac Rehabilitation Care</a></li>
                                                <li><a href="../advanced-care-programs/senior-care-in-pune">Senior Care</a></li>
                                                <li><a href="../advanced-care-programs/alzheimers-dementia-care-in-pune">Alzheimer’s Care</a></li>
                                                <li><a href="../advanced-care-programs/parkinsons-care-in-pune">Parkinson's Care</a></li>
                                                <li><a href="../advanced-care-programs/craniotomy-care-in-pune">Craniotomy Care</a></li>
                                                <li><a href="../advanced-care-programs/oncology-rehabilitation-in-pune">Oncology Rehabilitation</a></li>
                                                <li><a href="../advanced-care-programs/tracheostomy-care-in-pune">Tracheostomy Care</a></li>
                                                <li><a href="../advanced-care-programs/tkr-thr-knee-hip-replacement-care-in-pune">TKR/THR (Knee/Hip Replacement) Care</a></li>
                                                <li><a href="../advanced-care-programs/bedsore-management-in-pune">Bedsore Management</a></li>
                                               <li><a href="../advanced-care-programs/transitional-care-in-pune">Transitional Care</a></li> 
                                            </ul>
                                        </li>
                                    </ul>
                                </li>

                                <li class="dropdown">
                                    <a href="#">Home Care</a>
                                    <ul class="drpdwn-container">
                                        <li><a href="../caregiver-services">Caregiver</a></li>
                                        <li><a href="../nursing-care-at-home-in-pune">Nursing</a></li>
                                        <li><a href="../icu-care-at-home">ICU at Home</a></li>
                                    </ul>
                                </li>

                                <li class="dropdown">
                                    <a href="/online-therapy">Online Therapy</a>
                                    <ul class="drpdwn-container">
                                        <li><a href="../online-therapy#online-consultation">Online Consultation</a></li>
                                        <li><a href="../online-therapy#video-therapy-session">Video Therapy Sessions</a></li>
                                        <li><a href="../online-therapy#psychological-consuling">Online Psychological Counseling</a></li>
                                        <li><a href="../online-therapy#nutrition-guidance">Online Nutrition Guidance</a></li>
                                        <li><a href="../online-therapy#vr-monitoring">Virtual Recovery Monitoring</a></li>
                                    </ul>
                                </li>

                               <li class="dropdown">
                                    <a href="../about">About us </a>
                                     <ul class="drpdwn-container">
                                        <li><a href="../neuro-physiotherapist-in-pune">Our Experts</a></li>
                                    </ul>

                                </li>
                                 
                                <li>
                                    <a href="../blog">Blog</a>
                                </li>
                            </ul>
                        </nav><!-- /.main-header__nav -->
                        <div class="mobile-nav__btn mobile-nav__toggler">
                            <span></span>
                            <span></span>
                            <span></span>
                        </div><!-- /.mobile-nav__toggler -->
                       
                        <a href="../contact" class="sifoxen-btn main-header__btn">
                            book appointment
                        </a> <!-- /.thm-btn main-header__btn -->
                    </div><!-- /.main-header__right -->
                </div><!-- /.main-header__inner -->
            </div><!-- /.container-fluid -->
        </header>`



    }
}

class ServiceHeader4 extends HTMLElement {
    connectedCallback() {

        this.innerHTML = `


     <header class="main-header main-header--one sticky-header sticky-header--normal">
            <div class="main-header__bg" style="background-image: url(../assets/images/shapes/header-shape-bg-1-1.png);"></div><!-- /.main-header__bg -->
            <div class="topbar-one">
                <div class="container-fluid">
                    <div class="topbar-one__inner">
                        <ul class="list-unstyled topbar-one__info">
                            <li>
                                <span class="topbar-one__info__icon">
                                    <i class="icon-mail"></i>
                                </span>
                                <a href="mailto:hello@apricotcare.in" class="text-white">hello@apricotcare.in</a>
                            </li>
                            <li>
                                <span class="topbar-one__info__icon topbar-one__info__icon--phone">
                                    <i class="icon-phone-call"></i>
                                </span>
                                <a href="tel:+917387641462" class="text-white">+917387641462</a>
                            </li>
                        </ul><!-- /.list-unstyled topbar-one__info -->
                        <div class="topbar-one__right">
                            <div class="topbar-one__open">
                                <span class="topbar-one__open__icon">
                                    <i class="icon-clock"></i>
                                </span>
                                <p class="topbar-one__open__text text-white">Mon to Sun 8:00am to 8:00pm</p><!-- /.topbar-one__open__text -->
                            </div><!-- /.topbar-one__open -->
                            <div class="topbar-one__social">
                                <a href="https://www.facebook.com/apricotcare">
                                    <i class="fab fa-facebook-f" aria-hidden="true"></i>
                                    <span class="sr-only">Facebook</span>
                                </a>
                                <a href="https://x.com/care_apricot">
                                    <i class="fab fa-twitter" aria-hidden="true"></i>
                                    <span class="sr-only">Twitter</span>
                                </a>
                                <a href="https://www.instagram.com/apricotcare_neurorehab_pune/">
                                    <i class="fab fa-instagram" aria-hidden="true"></i>
                                    <span class="sr-only">Instagram</span>
                                </a>
                                <a href="https://www.youtube.com/@ApricotCare">
                                    <i class="fab fa-youtube" aria-hidden="true"></i>
                                    <span class="sr-only">Youtube</span>
                                </a>
                            </div><!-- /.topbar-one__social -->
                        </div><!-- /.topbar-one__right -->
                    </div><!-- /.topbar-one__inner -->
                </div><!-- /.container-fluid -->
            </div><!-- /.topbar-one -->
            <div class="container-fluid">    
                <div class="main-header__inner">
                    <div class="main-header__logo">
                        <a href="../">
                            <img src="../assets/images/home/Logo/Apricot Care Physiotherapy & Wellness, Kharad Pune (1).webp" alt="Sifoxen HTML" width="153" height="60">
                        </a>
                    </div><!-- /.main-header__logo -->
                    <div class="main-header__right">
                        <nav class="main-header__nav main-menu">
                            <ul class="main-menu__list">

                                <li class=" megamenu">
                                    <a href="../">Home</a>
                                   
                                </li>

                                <li class="dropdown">
                                    <a href="#">Rehabilitation</a>
                                    <ul class="drpdwn-container">
                                        <li class="dropdown">
                                            <a href="#">Medical Rehabilitation</a>
                                            <ul class="sub-menu drpdwn-container">
                                                <li><a href="../medical-rehabilitation/stroke-treatment-rehab-physiotherapy">Stroke Care</a></li>
                                                <li><a href="../medical-rehabilitation/spine-care-in-pune">Spine Care</a></li>
                                                <li><a href="../medical-rehabilitation/trauma-care-in-pune">Trauma Care</a></li>
                                                <li><a href="../medical-rehabilitation/orthopedic-care-in-pune">Orthopedic Care</a></li>
                                                <li><a href="../medical-rehabilitation/postoperative-care-in-pune">Postoperative Care</a></li>
                                                <li><a href="../medical-rehabilitation/oncology-care-in-pune">Oncology Care</a></li>
                                                <li><a href="../medical-rehabilitation/neuro-care-in-pune">Neuro Care</a></li>
                                                 <li><a href="../medical-rehabilitation/paralysis-care-in-pune">Paralysis Care</a>
                                                </li>
                                            </ul>
                                        </li>
                                        <li class="dropdown">
                                            <a href="#">Specialized Therapies</a>
                                            <ul class="sub-menu drpdwn-container">
                                                <li><a href="../specialized-therapies/physiotherapy-in-pune">Physiotherapy</a></li>
                                                <li><a href="../specialized-therapies/respiratory-therapy-in-pune">Respiratory Therapy</a></li>
                                                <li><a href="../specialized-therapies/nutrition-therapy-in-pune">Nutrition Therapy</a></li>
                                                <li><a href="../specialized-therapies/occupational-therapy-in-pune">Occupational Therapy</a></li>
                                                <li><a href="../specialized-therapies/psychological-rehabilitation-therapy-in-pune">Psychological Rehab Therapy</a></li>
                                                <li><a href="../specialized-therapies/integrative-therapy-in-pune">Integrative Therapy</a></li>
                                                <li><a href="../specialized-therapies/speech-and-swallow-therapy-in-pune">Speech & Swallow Therapy</a></li>
                                            </ul>
                                        </li>
                                        <li class="dropdown">
                                            <a href="#">Condition-Based Recovery</a>
                                            <ul class="sub-menu drpdwn-container">
                                                <li><a href="../condition-based-recovery/stroke-recovery-in-pune">Stroke Recovery</a></li>
                                                <li><a href="../condition-based-recovery/spinal-cord-injury-in-pune">Spinal Cord Injury</a></li>
                                                <li><a href="../condition-based-recovery/brain-injury-recovery-in-pune">Brain Injury Recovery</a></li>
                                                <li><a href="../condition-based-recovery/multiple-sclerosis-in-pune">Multiple Sclerosis</a></li>
                                                <li><a href="../condition-based-recovery/parkinsons-disease-in-pune">Parkinson's Disease</a></li>
                                                <li><a href="../condition-based-recovery/cerebral-palsy-in-pune">Cerebral Palsy</a></li>
                                                <li><a href="../condition-based-recovery/pain-management-in-pune">Pain Management</a></li>
                                                <li><a href="../condition-based-recovery/limb-loss-and-impairment-in-pune">Limb Loss & Impairment</a></li>
                                            </ul>
                                        </li>
                                        <li class="dropdown">
                                            <a href="#">Advanced Care Programs</a>
                                            <ul class="sub-menu drpdwn-container adv-drop-dwn">
                                                <li><a href="./feeding-tube-care-in-pune">Feeding Tube Care</a></li>
                                                <li><a href="./cardiac-rehabilitation-in-pune">Cardiac Rehabilitation Care</a></li>
                                                <li><a href="./senior-care-in-pune">Senior Care</a></li>
                                                <li><a href="./alzheimers-dementia-care-in-pune">Alzheimer’s Care</a></li>
                                                <li><a href="./parkinsons-care-in-pune">Parkinson's Care</a></li>
                                                <li><a href="./craniotomy-care-in-pune">Craniotomy Care</a></li>
                                                <li><a href="./oncology-rehabilitation-in-pune">Oncology Rehabilitation</a></li>
                                                <li><a href="./tracheostomy-care-in-pune">Tracheostomy Care</a></li>
                                                <li><a href="./tkr-thr-knee-hip-replacement-care-in-pune">TKR/THR (Knee/Hip Replacement) Care</a></li>
                                                <li><a href="./bedsore-management-in-pune">Bedsore Management</a></li>
                                               <li><a href="./transitional-care-in-pune">Transitional Care</a></li> 
                                            </ul>
                                        </li>
                                    </ul>
                                </li>

                                <li class="dropdown">
                                    <a href="#">Home Care</a>
                                    <ul class="drpdwn-container">
                                        <li><a href="../caregiver-services">Caregiver</a></li>
                                        <li><a href="../nursing-care-at-home-in-pune">Nursing</a></li>
                                        <li><a href="../icu-care-at-home">ICU at Home</a></li>
                                    </ul>
                                </li>

                                <li class="dropdown">
                                    <a href="/online-therapy">Online Therapy</a>
                                    <ul class="drpdwn-container">
                                       <li><a href="../online-therapy/#online-consultation">Online Consultation</a></li>
                                        <li><a href="../online-therapy/#video-therapy-session">Video Therapy Sessions</a></li>
                                        <li><a href="../online-therapy/#psychological-consuling">Online Psychological Counseling</a></li>
                                        <li><a href="../online-therapy/#nutrition-guidance">Online Nutrition Guidance</a></li>
                                        <li><a href="../online-therapy/#vr-monitoring">Virtual Recovery Monitoring</a></li>
                                    </ul>
                                </li>

                               <li class="dropdown">
                                    <a href="../about">About us </a>
                                     <ul class="drpdwn-container">
                                        <li><a href="../neuro-physiotherapist-in-pune">Our Experts</a></li>
                                    </ul>

                                </li>
                                 
                                <li>
                                    <a href="../blog">Blog</a>
                                </li>
                            </ul>
                        </nav><!-- /.main-header__nav -->
                        <div class="mobile-nav__btn mobile-nav__toggler">
                            <span></span>
                            <span></span>
                            <span></span>
                        </div><!-- /.mobile-nav__toggler -->
                       
                        <a href="../contact" class="sifoxen-btn main-header__btn">
                            book appointment
                        </a> <!-- /.thm-btn main-header__btn -->
                    </div><!-- /.main-header__right -->
                </div><!-- /.main-header__inner -->
            </div><!-- /.container-fluid -->
        </header>`



    }
}

customElements.define('main-header', Header);
customElements.define('main-footer', Footer);
customElements.define('service-footer', ServiceFooter);
customElements.define('service-header', ServiceHeader);
customElements.define('service-header-2', ServiceHeader2);
customElements.define('service-header-3', ServiceHeader3);
customElements.define('service-header-4', ServiceHeader4);





