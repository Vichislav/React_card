import React, {Component} from 'react';
import CarouselBox from "../Components/CarouselBox";
import {Button, Card, CardGroup, Container} from "react-bootstrap";
import card_1 from "../Assets/Card_1.jpg"
import card_2 from "../Assets/Card_2.jpg"
import card_3 from "../Assets/Card_3.jpg"
import card_4 from "../Assets/Card_4.jpg"
import card_0 from "../Assets/card_0.png"
import git_card from "../Assets/git.jpg"
import '../css/home.css'
import MoneyCard from "../Components/MoneyCard";
import Message from "../Components/Message";
import ContactsComponents from "../Components/ContactsComponents";
import Footer from "../Components/Footer";



class Home extends Component {
    render() {
        return (
            <div className="wrap">
                <div className="wrapContainer">
                    <div className="wrapContainerContent">
                        <h2 className="wrapContainerContentTitle">
                            Привет! Меня зовут Вячеслав и я изучаю JavaScript.
                        </h2>
                        <p className="wrapContainerContentText">
                            Этот сайт я сделал, как удобный вариант демонстрации своего уровня познания JavaScript,
                            и неплохую возможность рассказать о себе.
                        </p>
                        <div className={'wrapContainerContentGradient'}></div>
                    </div>
                    <div className="wrapContainerCarousel">
                        <CarouselBox />
                    </div>
                </div>
                <div className="wrapBelt">
                    <p className="wrapContainerContentText mt-2 beltText">
                        Сайт написан с применением React Bootstrap
                    </p>
                </div>
                <MoneyCard></MoneyCard>
                <Message></Message>
                <ContactsComponents></ContactsComponents>
                <div className={'wrapStudy'}>
                    <div className={'wrapStudyRow'}>
                        <Card  className="wrapStudyRowItemLeft">
                            <Card.Img variant="top"
                                      src={card_0}
                                      className={'wrapStudyRowItemImg'}
                            />
                            <Card.Body>
                                <Card.Title style={{color: "white"}}>React приложение</Card.Title>
                                <Card.Text style={{color: "white"}}>
                                    В приложении реализована возможность авторизации(и выхода) и регистрации пользователя,
                                    заполнения и редактирования данных пользователя.
                                </Card.Text>
                                <Button variant="primary"
                                        onClick={() => window.open("https://github.com/Vichislav/frontend_purrweb")}
                                >Подробнее  на git
                                </Button>
                            </Card.Body>
                        </Card>
                        <Card  className="wrapStudyRowItemRight">
                            <Card.Img variant="top"
                                      src={card_2}
                                      className={'wrapStudyRowItemImg'}
                            />
                            <Card.Body>
                                <Card.Title>Адаптивная верстка</Card.Title>
                                <Card.Text>
                                    Пример выполнения задания по адаптивной верстки сайта.
                                    Плюс slick слайдер типа single item, написанный без jQery и css.
                                </Card.Text>
                                <Button variant="primary"
                                        onClick={() => window.open("https://github.com/Vichislav/html_purrweb")}
                                >Подробнее на git
                                </Button>
                            </Card.Body>
                        </Card>
                    </div>
                    <div className={'wrapStudyRow'}>
                        <Card  className="wrapStudyRowItemRight">
                            <Card.Img variant="top"
                                      src={card_3}
                                      className={'wrapStudyRowItemImg'}
                            />
                            <Card.Body>
                                <Card.Title>Работа с JSON</Card.Title>
                                <Card.Text>
                                    Пример выполнения задания по работе с данными, получаемыми из файла JSON
                                </Card.Text>
                                <Button variant="primary"
                                        onClick={() => window.open("https://github.com/Vichislav/work-with-JSON")}
                                >Подробнее на git
                                </Button>
                            </Card.Body>
                        </Card>
                        <Card  className="wrapStudyRowItemLeft">
                            <Card.Img variant="top"
                                      src={card_4}
                                      className={'wrapStudyRowItemImg'}
                            />
                            <Card.Body>
                                <Card.Title style={{color: "white"}}>Angular app</Card.Title>
                                <Card.Text style={{color: "white"}}>
                                    Angular todo приложение с применением RxJs и NgRx
                                </Card.Text>
                                <Button variant="primary"
                                        onClick={() => window.open("https://github.com/Vichislav/Angular_Todo_app")}
                                >Подробнее  на git
                                </Button>
                            </Card.Body>
                        </Card>
                    </div>
                    <div className={'wrapStudyRow'}>
                        <Card  className="wrapStudyRowItemLeft">
                            <Card.Img variant="top"
                                      src={card_1}
                                      className={'wrapStudyRowItemImg'}
                            />
                            <Card.Body>
                                <Card.Title style={{color: "white"}}>Unit test (Angular app)</Card.Title>
                                <Card.Text style={{color: "white"}}>
                                    Тестирование Angular приложения с применением Karma и Jasmine
                                </Card.Text>
                                <Button variant="primary"
                                        onClick={() => window.open("https://github.com/Vichislav/ang_unit_test")}
                                >Подробнее  на git
                                </Button>
                            </Card.Body>
                        </Card>
                        <Card  className="wrapStudyRowItemRight">
                            <Card.Img variant="top"
                                      src={git_card}
                                      className={'wrapStudyRowItemImg'}
                            />
                            <Card.Body>
                                <Card.Title>Больше информации</Card.Title>
                                <Card.Text>
                                    Больше информации можно найти по ссылке на git.
                                </Card.Text>
                                <Button variant="primary"
                                        onClick={() => window.open("https://github.com/Vichislav")}
                                >Подробнее на git
                                </Button>
                            </Card.Body>
                        </Card>
                    </div>
                </div>
                <Footer></Footer>
            </div>
        );
    }
}

export default Home;
