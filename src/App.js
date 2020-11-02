import './App.css';
import {Row, Col, Badge, Carousel} from "react-bootstrap/";
import logo from './assets/logo.png';
import twitter from './assets/twitter.svg';
import rss from './assets/rss.svg';
import facebook from './assets/facebook.svg';
import youtube from './assets/youtube.svg';
import instagram from './assets/instagram.svg';
import FirstNews from './assets/FirstNews.jpg';
import SecondNews from './assets/SecondNews.jpg';
import ThirdNews from './assets/ThirdNews.jpg';

function App() {
    return (
        <div>
            <div className="nav">
                <input type="checkbox" id="nav-check"/>

                <div className="nav-btn">
                    <label htmlFor="nav-check">
                        <span/>
                        <span/>
                        <span/>
                    </label>
                </div>
                <div className="nav-links">
                    <a href="Github" target="_blank">الرئيسية</a>
                    <a href="Github" target="_blank">سياسة</a>
                    <a href="Github" target="_blank">أمن</a>
                    <a href="Github" target="_blank">اقتصاد</a>
                    <a href="Github" target="_blank">ثقافة</a>
                    <a href="Github" target="_blank">رياضة</a>
                    <a href="Github" target="_blank">مجتمع</a>
                    <a href="Github" target="_blank">قضاء</a>
                    <a href="Github" target="_blank">تعليم</a>
                    <a href="Github" target="_blank">منظمات</a>
                    <a href="Github" target="_blank">متابعات بالفيديو</a>
                    <a href="Github" target="_blank">من نحن</a>

                </div>
                <div className="nav-header">
                    <div className="nav-title">
                        <img alt="alikhbaria"
                            src={logo}
                            className="logo"/>
                    </div>
                </div>
            </div>
            <div className="blockLastNews">
                <div className="container">
                    <Row>
                        <Col>
                            <div className="itemLastNews">
                                <Badge className='badgeLastNews'>
                                    <h6 className="linkText">أخر الأخبار</h6>
                                </Badge>
                                <p className="dateStyle">
                                    2020-11-01 15:19</p>
                                <h6>متبعو هذا النظام الغذائي أكثر عرضة للإصابة بكورونا</h6>
                                <hr style={
                                    {borderTop: "dotted 1px"}
                                }/>
                            </div>
                            <div className="itemLastNews">
                                <p className="dateStyle">
                                    2020-11-01 15:19</p>
                                <h6>متبعو هذا النظام الغذائي أكثر عرضة للإصابة بكورونا</h6>
                                <hr style={
                                    {borderTop: "dotted 1px"}
                                }/>
                            </div>
                            <div className="itemLastNews">
                                <p className="dateStyle">
                                    2020-11-01 15:19</p>
                                <h6>متبعو هذا النظام الغذائي أكثر عرضة للإصابة بكورونا</h6>
                                <hr style={
                                    {borderTop: "dotted 1px"}
                                }/>
                            </div>
                            <div className="itemLastNews">
                                <p className="dateStyle">
                                    2020-11-01 15:19</p>
                                <h6>متبعو هذا النظام الغذائي أكثر عرضة للإصابة بكورونا</h6>
                                <hr style={
                                    {borderTop: "dotted 1px"}
                                }/>
                            </div>
                            <div className="mostLearn">
                                <Badge className='badgeLastNews'>
                                    <h6 className="linkText">الأكثر قراءة</h6>
                                </Badge>
                                <p className="dateStyle">
                                    2020-11-01 15:19</p>
                                <h6>متبعو هذا النظام الغذائي أكثر عرضة للإصابة بكورونا</h6>
                                <hr style={
                                    {borderTop: "dotted 1px"}
                                }/>
                            </div>
                            <div className="itemLastNews">
                                <p className="dateStyle">
                                    2020-11-01 15:19</p>
                                <h6>متبعو هذا النظام الغذائي أكثر عرضة للإصابة بكورونا</h6>
                                <hr style={
                                    {borderTop: "dotted 1px"}
                                }/>
                            </div>
                            <div className="itemLastNews">
                                <p className="dateStyle">
                                    2020-11-01 15:19</p>
                                <h6>متبعو هذا النظام الغذائي أكثر عرضة للإصابة بكورونا</h6>
                                <hr style={
                                    {borderTop: "dotted 1px"}
                                }/>
                            </div>
                            <div style={
                                {width: '300px'}
                            }>
                                <p className="dateStyle">
                                    2020-11-01 15:19</p>
                                <h6>متبعو هذا النظام الغذائي أكثر عرضة للإصابة بكورونا</h6>
                                <hr style={
                                    {borderTop: "dotted 1px"}
                                }/>
                            </div>
                            <div className="societyNews">
                                <Badge className='badgeLastNews'>
                                    <h6 className="linkText">مجتمع
                                    </h6>
                                </Badge>
                                <p className="dateStyle">
                                    2020-11-01 15:19</p>
                                <h6>متبعو هذا النظام الغذائي أكثر عرضة للإصابة بكورونا</h6>
                                <hr style={
                                    {borderTop: "dotted 1px"}
                                }/>
                            </div>
                            <div className="itemLastNews">
                                <p className="dateStyle">
                                    2020-11-01 15:19</p>
                                <h6>متبعو هذا النظام الغذائي أكثر عرضة للإصابة بكورونا</h6>
                                <hr style={
                                    {borderTop: "dotted 1px"}
                                }/>
                            </div>
                            <div className="itemLastNews">
                                <p className="dateStyle">
                                    2020-11-01 15:19</p>
                                <h6>متبعو هذا النظام الغذائي أكثر عرضة للإصابة بكورونا</h6>
                                <hr style={
                                    {borderTop: "dotted 1px"}
                                }/>
                            </div>
                            <div className="itemLastNews">
                                <p className="dateStyle">
                                    2020-11-01 15:19</p>
                                <h6>متبعو هذا النظام الغذائي أكثر عرضة للإصابة بكورونا</h6>
                                <hr style={
                                    {borderTop: "dotted 1px"}
                                }/>
                            </div>
                            <div className="judgementNews">
                                <Badge className='badgeLastNews'>
                                    <h6 className="linkText">قضاء
                                    </h6>
                                </Badge>
                                <p className="dateStyle">
                                    2020-11-01 15:19</p>
                                <h6>متبعو هذا النظام الغذائي أكثر عرضة للإصابة بكورونا</h6>
                                <hr style={
                                    {borderTop: "dotted 1px"}
                                }/>
                            </div>
                            <div className="itemLastNews">
                                <p className="dateStyle">
                                    2020-11-01 15:19</p>
                                <h6>متبعو هذا النظام الغذائي أكثر عرضة للإصابة بكورونا</h6>
                                <hr style={
                                    {borderTop: "dotted 1px"}
                                }/>
                            </div>
                            <div className="itemLastNews">
                                <p className="dateStyle">
                                    2020-11-01 15:19</p>
                                <h6>متبعو هذا النظام الغذائي أكثر عرضة للإصابة بكورونا</h6>
                                <hr style={
                                    {borderTop: "dotted 1px"}
                                }/>
                            </div>
                            <div className="itemLastNews">
                                <p className="dateStyle">
                                    2020-11-01 15:19</p>
                                <h6>متبعو هذا النظام الغذائي أكثر عرضة للإصابة بكورونا</h6>
                                <hr style={
                                    {borderTop: "dotted 1px"}
                                }/>
                            </div>
                        </Col>
                        <Col>
                            <div className="itemLastNews">
                                <img alt="alikhbariya" className="pictureNews"
                                    src={FirstNews}/>

                                <p className="dateStyle">
                                    2020-11-01 15:19</p>
                                <h6>متبعو هذا النظام الغذائي أكثر عرضة للإصابة بكورونا</h6>
                                <hr style={
                                    {borderTop: "dotted 1px"}
                                }/>
                            </div>
                            <div className="itemLastNews">
                                <p className="dateStyle">
                                    2020-11-01 15:19</p>
                                <h6>متبعو هذا النظام الغذائي أكثر عرضة للإصابة بكورونا</h6>
                                <hr style={
                                    {borderTop: "dotted 1px"}
                                }/>
                            </div>
                            <div className="itemLastNews">


                                <img alt="alikhbariya" className="pictureNews"
                                    src={FirstNews}/>

                            </div>
                            <div className="itemLastNews">
                                <p className="dateStyle">
                                    2020-11-01 15:19</p>
                                <h6>متبعو هذا النظام الغذائي أكثر عرضة للإصابة بكورونا</h6>
                                <hr style={
                                    {borderTop: "dotted 1px"}
                                }/>
                            </div>
                            <div className="itemLastNews">
                                <img alt="alikhbariya" className="pictureNews"
                                    src={ThirdNews}/>

                                <p className="dateStyle">
                                    2020-11-01 15:19</p>
                                <h6>متبعو هذا النظام الغذائي أكثر عرضة للإصابة بكورونا</h6>
                                <hr style={
                                    {borderTop: "dotted 1px"}
                                }/>
                            </div>
                            <div className="itemLastNews">
                                <p className="dateStyle">
                                    2020-11-01 15:19</p>
                                <h6>متبعو هذا النظام الغذائي أكثر عرضة للإصابة بكورونا</h6>
                                <hr style={
                                    {borderTop: "dotted 1px"}
                                }/>
                            </div>
                            <div className="itemLastNews">
                                <p className="dateStyle">
                                    2020-11-01 15:19</p>
                                <h6>متبعو هذا النظام الغذائي أكثر عرضة للإصابة بكورونا</h6>
                                <img alt="alikhbariya" className="pictureNews"
                                    src={SecondNews}/>

                            </div>
                            <div className="itemLastNews">
                                <p className="dateStyle">
                                    2020-11-01 15:19</p>
                                <h6>متبعو هذا النظام الغذائي أكثر عرضة للإصابة بكورونا</h6>
                                <hr style={
                                    {borderTop: "dotted 1px"}
                                }/>
                            </div>
                            <div className="itemLastNews">
                                <p className="dateStyle">
                                    2020-11-01 15:19</p>
                                <h6>متبعو هذا النظام الغذائي أكثر عرضة للإصابة بكورونا</h6>
                                <hr style={
                                    {borderTop: "dotted 1px"}
                                }/>
                            </div>
                            <div className="itemLastNews">
                                <p className="dateStyle">
                                    2020-11-01 15:19</p>
                                <h6>متبعو هذا النظام الغذائي أكثر عرضة للإصابة بكورونا</h6>
                                <hr style={
                                    {borderTop: "dotted 1px"}
                                }/>
                            </div>
                        </Col>
                        <Col>
                            <Carousel>
                                <Carousel.Item>
                                    <img className="d-block w-100"
                                        src={FirstNews}
                                        alt="First slide"/>
                                    <Carousel.Caption>
                                        <h3>الهوارية: جيش البحر ينقذ 4 مهاجرين غير نظاميين
                                        </h3>
                                        <p>
                                            أنقذت وحدة بحرية تابعة لجيش البحر، بعد ظهر اليوم الأحد، أربعة تونسيين
                                        </p>

                                    </Carousel.Caption>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <img className="d-block w-100"
                                        src={SecondNews}
                                        alt="Third slide"/>

                                    <Carousel.Caption>
                                        <h3>(رقم مفزع) - 3 آلاف متشرد في تونس زمن الكورونا
                                        </h3>
                                        <p>في الوقت الذي يزداد  فيه الوضع الصحي تأزما  مع انتشار فيروس كوروناي
                                        </p>
                                    </Carousel.Caption>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <img className="d-block w-100"
                                        src={ThirdNews}
                                        alt="Third slide"/>

                                    <Carousel.Caption>
                                        <h3>أ - تطاوين: أصحاب الشركات البترولية تدعو رئاستي الجمهورية والحكومة إلى إيقاف "المهزلة"
                                        </h3>
                                        <p>أطلق اليوم الأحد غرة نوفمبر


                                        </p>
                                    </Carousel.Caption>
                                </Carousel.Item>
                            </Carousel>
                            <Badge className='badgeRightSide'>
                                <h6 className="linkTextRigtSide">سياسة</h6>
                                <span className="verticalLine"></span>

                            </Badge>
                            <Row>
                                <Col>
                                    <p className="dateStyle">
                                        2020-11-01 15:19</p>
                                    <h5>النظام الغذائي أكثر عرضة للإصابة</h5>
                                    <h6>متبعو هذا النظام الغذائي أكثر عرضة للإصابة بكورونا</h6>
                                    <hr className="horizontalLine"/>
                                </Col>

                                <Col>
                                    <img alt="alikhbariya" className="pictureNewsSLideRight"
                                        src={ThirdNews}/>
                                </Col>

                            </Row>
                            <Row>
                                <Col>
                                    <h5>النظام الغذائي أكثر عرضة للإصابة</h5>

                                    <p className="dateStyle">
                                        2020-11-01 15:19</p>
                                    <h6>متبعو هذا النظام الغذائي أكثر عرضة للإصابة بكورونا</h6>
                                    <hr className="horizontalLine"/>
                                </Col>

                                <Col>
                                    <img alt="alikhbariya" className="pictureNewsSLideRight"
                                        src={FirstNews}/>
                                </Col>

                            </Row>
                            <Row>
                                <Col>
                                    <p className="dateStyle">
                                        2020-11-01 15:19</p>
                                    <h5>النظام الغذائي أكثر عرضة للإصابة</h5>

                                    <h6>متبعو هذا النظام الغذائي أكثر عرضة للإصابة بكورونا</h6>
                                    <hr className="horizontalLine"/>
                                </Col>

                                <Col>
                                    <img alt="alikhbariya" className="pictureNewsSLideRight"
                                        src={SecondNews}/>
                                </Col>

                            </Row>
                            <Row>
                                <Col>
                                    <p className="dateStyle">
                                        2020-11-01 15:19</p>
                                    <h5>النظام الغذائي أكثر عرضة للإصابة</h5>

                                    <h6>متبعو هذا النظام الغذائي أكثر عرضة للإصابة بكورونا</h6>
                                    <hr className="horizontalLine"/>
                                </Col>

                                <Col>
                                    <img alt="alikhbariya" className="pictureNewsSLideRight"
                                        src={FirstNews}/>
                                </Col>

                            </Row>
                            <Badge className='badgeRightSide'>
                                <h6 className="linkTextRigtSide">رياضة</h6>
                                <span className="verticalLine"></span>

                            </Badge>
                            <Row>
                                <Col>
                                    <p className="dateStyle">
                                        2020-11-01 15:19</p>
                                    <h5>النظام الغذائي أكثر عرضة للإصابة</h5>
                                    <h6>متبعو هذا النظام الغذائي أكثر عرضة للإصابة بكورونا</h6>
                                    <hr className="horizontalLine"/>
                                </Col>

                                <Col>
                                    <img alt="alikhbariya" className="pictureNewsSLideRight"
                                        src={ThirdNews}/>
                                </Col>

                            </Row>
                            <Row>
                                <Col>
                                    <h5>النظام الغذائي أكثر عرضة للإصابة</h5>

                                    <p className="dateStyle">
                                        2020-11-01 15:19</p>
                                    <h6>متبعو هذا النظام الغذائي أكثر عرضة للإصابة بكورونا</h6>
                                    <hr className="horizontalLine"/>
                                </Col>

                                <Col>
                                    <img alt="alikhbariya" className="pictureNewsSLideRight"
                                        src={FirstNews}/>
                                </Col>

                            </Row>
                            <Row>
                                <Col>
                                    <p className="dateStyle">
                                        2020-11-01 15:19</p>
                                    <h5>النظام الغذائي أكثر عرضة للإصابة</h5>

                                    <h6>متبعو هذا النظام الغذائي أكثر عرضة للإصابة بكورونا</h6>
                                    <hr className="horizontalLine"/>
                                </Col>

                                <Col>
                                    <img alt="alikhbariya" className="pictureNewsSLideRight"
                                        src={SecondNews}/>
                                </Col>

                            </Row>
                            <Row>
                                <Col>
                                    <p className="dateStyle">
                                        2020-11-01 15:19</p>
                                    <h5>النظام الغذائي أكثر عرضة للإصابة</h5>

                                    <h6>متبعو هذا النظام الغذائي أكثر عرضة للإصابة بكورونا</h6>
                                    <hr className="horizontalLine"/>
                                </Col>

                                <Col>
                                    <img alt="alikhbariya" className="pictureNewsSLideRight"
                                        src={FirstNews}/>
                                </Col>

                            </Row>
                            <Row>
                                <Col>
                                    <p className="dateStyle">
                                        2020-11-01 15:19</p>
                                    <h5>النظام الغذائي أكثر عرضة للإصابة</h5>

                                    <h6>متبعو هذا النظام الغذائي أكثر عرضة للإصابة بكورونا</h6>
                                    <hr className="horizontalLine"/>
                                </Col>

                                <Col>
                                    <img alt="alikhbariya" className="pictureNewsSLideRight"
                                        src={FirstNews}/>
                                </Col>

                            </Row>
                        </Col>
                    </Row>

                </div>
            </div>
            <div className="horizontalNews">
                <Badge className='badgeHorizontalSide'>
                    <h6 className="linkTextHorizontalSide">سياسة</h6>
                    <span className="verticalLineHorizontalSide"></span>

                </Badge>
                <Row>
                    <Col>
                        <div className="itemshorizontalNews">
                            <img alt="alikhbariya" className="pictureNews"
                                src={FirstNews}/>

                            <p className="dateStyle">
                                2020-11-01 15:19</p>
                            <h6>متبعو هذا النظام الغذائي أكثر عرضة للإصابة بكورونا</h6>

                        </div>
                    </Col>
                    <Col>
                        <div className="itemshorizontalNews">
                            <img alt="alikhbariya" className="pictureNews"
                                src={FirstNews}/>

                            <p className="dateStyle">
                                2020-11-01 15:19</p>
                            <h6>متبعو هذا النظام الغذائي أكثر عرضة للإصابة بكورونا</h6>

                        </div>
                    </Col>
                    <Col>
                        <div className="itemshorizontalNews">
                            <img alt="alikhbariya" className="pictureNews"
                                src={FirstNews}/>

                            <p className="dateStyle">
                                2020-11-01 15:19</p>
                            <h6>متبعو هذا النظام الغذائي أكثر عرضة للإصابة بكورونا</h6>

                        </div>
                    </Col>


                </Row>
            </div>

            <footer className="site-footer">
                <div className="container">
                    <div className="row">

                        <div className="col-xs-6 col-md-3">
                            <ul className="footer-links">
                                <li>
                                    <a href="#education">الرئيسية</a>
                                </li>
                                <li>
                                    <a href="#organisation">سياسة</a>
                                </li>
                                <li>
                                    <a href="#vedeo">أمن</a>
                                </li>
                                <li>
                                    <a href="#about">
                                        اقتصاد</a>
                                </li>
                            </ul>
                        </div>
                        <div className="col-xs-6 col-md-3">
                            <ul className="footer-links">
                                <li>
                                    <a href="#education">ثقافة</a>
                                </li>
                                <li>
                                    <a href="#organisation">رياضة</a>
                                </li>
                                <li>
                                    <a href="#vedeo">مجتمع</a>
                                </li>
                                <li>
                                    <a href="#about">قضاء</a>
                                </li>
                            </ul>
                        </div>
                        <div className="col-xs-6 col-md-3">
                            <ul className="footer-links">
                                <li>
                                    <a href="#education">تعليم</a>
                                </li>
                                <li>
                                    <a href="#organisation">منظمات</a>
                                </li>
                                <li>
                                    <a href="#vedeo">متابعات بالفيديو</a>
                                </li>
                                <li>
                                    <a href="#about">من نحن</a>
                                </li>
                            </ul>
                        </div>
                        <div className="col-xs-6 col-md-3">
                            <img alt="alikhbaria"
                                src={logo}
                                className="logoFooter"/>
                        </div>
                    </div>
                    <hr/>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-md-8 col-sm-6 col-xs-12">
                            <p className="copyright-text">2020 © الإخباريّة التونسيّة تطوير الموقع من قبل :
                                <a href="https://www.tanitweb.com/fr/">TANITWEB</a>
                            </p>
                        </div>
                        <div className="col-md-4 col-sm-6 col-xs-12">
                            <ul className="social-icons">
                                <li>
                                    <a className="facebook" href="https://www.tanitweb.com/fr/">
                                        <img alt="socialMedia" className="socialMedia"
                                            src={facebook}/></a>
                                </li>
                                <li>
                                    <a className="facebook" href="https://www.tanitweb.com/fr/"><img alt="socialMedia" className="socialMedia"
                                            src={twitter}/></a>
                                </li>
                                <li>
                                    <a className="facebook" href="https://www.tanitweb.com/fr/"><img alt="socialMedia" className="socialMedia"
                                            src={instagram}/></a>
                                </li>
                                <li>
                                    <a className="facebook" href="https://www.tanitweb.com/fr/"><img alt="socialMedia" className="socialMedia"
                                            src={youtube}/></a>
                                </li>
                                <li>
                                    <a className="facebook" href="https://www.tanitweb.com/fr/"><img alt="socialMedia" className="socialMedia"
                                            src={rss}/></a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </footer>
        </div>

    );
}
export default App;
