import React from 'react';
import classesHeader from './AppHeader.module.css'
import { BurgerIcon, Logo, ListIcon, ProfileIcon } from '@ya.praktikum/react-developer-burger-ui-components'

class AppHeader extends React.Component {
    render() {
        return (
            <header className={`pb-4 pt-4   ${classesHeader.header}`}>
                <div className={classesHeader.container}>
                    <div className={classesHeader.navigation}>
                        <a href='/' className={`pl-5 pr-5 pb-4 pt-4 mr-2 ${classesHeader.link}`}>
                            <div className={`mr-2`}>
                                <BurgerIcon type="primary" />
                            </div>
                            <span className={`text text_type_main-default ${classesHeader.name}`}>Конструктор</span>
                        </a>
                        <a href='/' className={`pl-5 pr-5 pb-4 pt-4 mr-2 ${classesHeader.link}`}>
                            <div className={`mr-2`}>
                                <ListIcon type="secondary" />
                            </div>
                            <span className={`text text_type_main-default text_color_inactive`}>Лента заказов</span>
                        </a>
                    </div>
                    <a href='/' className={classesHeader.logo}>
                        <Logo />
                    </a>
                    <div className={classesHeader.navigation}>
                        <a href='/' className={`pl-5 pr-5 pb-4 pt-4  ${classesHeader.link}`}>
                            <div className={`mr-2`}>
                                <ProfileIcon type="secondary" />
                            </div>
                            <span className={`text text_type_main-default text_color_inactive`}> Личный кабинет</span>
                        </a>
                    </div>

                </div>
            </header>
        )
    }
}



export default AppHeader;
