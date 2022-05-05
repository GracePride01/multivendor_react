import React from 'react';
import './sidebar.css';
import './common/customcss/style.css';
import './common/customcss/bootstrap.css';
import './common/customcss/css_oims_2.0.css';
import './common/customcss/c3.css';
import './common/customcss/subnav.css';

function Sidebar  ()  {
return (




	<>
        {/* // <!--sidebar start--> */}
        <div class="sidenav hide">
            <div class="left-sidebar23" style="margin-top:0px">
                {/* <!-- main-nav --> */}
                <nav class="main-nav">
                    <ul class="main-menu">

                        <li>
                            <img class="img-responsive" width="65px" src={require("#")} alt="oims " />
                        </li>

                        <li class="sidenavhome active">
                            <a data-toggle="tooltip" data-placement="right" href="#" title="Home"><i class="fa fa-home fasize2 facolor" aria-hidden="true"></i></a>
                        </li>


                        <li class="sidenavmenu mis">
                            <a class="entitybtn" data-toggle="tooltip" data-placement="right" href="#" title="MIS"><i class="fa fa-bar-chart fasize facolor" aria-hidden="true"></i></a>
                        </li>



                        <li class="sidenavmenu">
                            <a class="entitybtn" data-toggle="tooltip" data-placement="right" href="#" title="Masters"><i class="fa fa-bullseye fasize facolor" aria-hidden="true"></i></a>
                        </li>


                        <li class="sidenavmenu">
                            <a class="entitybtn" data-toggle="tooltip" data-placement="right" href="#" title="Appointment"><i class="fa fa-calendar fasize facolor" aria-hidden="true"></i></a>
                        </li>



                        <li class="sidenavmenu">
                            <a class="entitybtn" data-toggle="tooltip" data-placement="right" href="#" title="OP"><i class="fa fa-users fasize facolor" aria-hidden="true"></i></a>
                        </li>



                        <li class="sidenavmenu">
                            <a class="entitybtn" data-toggle="tooltip" data-placement="right" href="#" title="Video Consultation"><i class="fa fa-video-camera fasize facolor" aria-hidden="true"></i></a>
                        </li>




                        <li class="sidenavmenu">
                            <a class="entitybtn" data-toggle="tooltip" data-placement="right" href="#" title="IP"><i class="fa fa-bed fasize facolor" aria-hidden="true"></i></a>
                        </li>


                        <li class="sidenavmenu">
                            <a class="entitybtn" data-toggle="tooltip" data-placement="right" href="#" title="Discharge"><i class="fa fa-pencil-square-o fasize facolor" aria-hidden="true"></i></a>
                        </li>



                        <li class="sidenavmenu">
                            <a class="entitybtn" data-toggle="tooltip" data-placement="right" href="#" title="Lab order"><i class="fa fa-flask fasize facolor" aria-hidden="true"></i></a>
                        </li>


                        <li class="sidenavmenu">
                            <a class="entitybtn" data-toggle="tooltip" data-placement="right" href="#" title="Radiology order"><i class="fa fa-image fasize facolor" aria-hidden="true"></i></a>
                        </li>


                        <li class="sidenavmenu">
                            <a class="entitybtn" data-toggle="tooltip" data-placement="right" href="#" title="Stock Sale"><i class="fa fa-shopping-cart fasize facolor" aria-hidden="true"></i></a>
                        </li>

                        <li class="sidenavmenu">
                            <a class="entitybtn" data-toggle="tooltip" data-placement="right" href="#" title="oims Feature Updates"> <i class="fa fa-bullhorn fasize facolor" aria-hidden="true"></i><div style="color: #E16408;font-weight: bold;">new</div></a>
                        </li>

                        <li class="sidenavmenu hide">
                            <a class="entitybtn" data-toggle="tooltip" data-placement="right" href="#" title="Log"> <i class="fa fa-archive fasize facolor" aria-hidden="true"></i></a>
                        </li>



                        <li class="sidenavmenu">
                            <a class="entitybtn" data-toggle="tooltip" data-placement="right" href="#" title="Master Setting Status"> <i class="fa fa-cog fasize facolor" aria-hidden="true"></i></a>
                        </li>

                        <li class="sidenavmenu">
                            <a class="entitybtn" data-toggle="tooltip" data-placement="right" href="#" title="oims Support"> <i class="fa fa-life-ring fasize facolor" aria-hidden="true"></i></a>
                        </li>

                        <li class="sidenavmenu hide">
                            <a id="oims-chat" data-toggle="tooltip" data-placement="right" href="#" title="Chat"> <i class="fa fa-wechat fasize facolor" aria-hidden="true"></i></a>
                        </li>
                    </ul>
                </nav>
                {/* <!-- /main-nav --> */}
            </div>
        </div></>
 
 



    
);
};

export default Sidebar;