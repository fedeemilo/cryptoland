import React, { useEffect, useState } from "react";
import { Menu, Typography, Avatar, Button } from "antd";
import { Link } from "react-router-dom";
import {
    HomeOutlined,
    MoneyCollectOutlined,
    BulbOutlined,
    FundOutlined,
    MenuOutlined
} from "@ant-design/icons";
import icon from "../../images/cryptocurrency.png";

const { Item } = Menu;
const { Title } = Typography;

const Navbar = () => {
    const [activeMenu, setActiveMenu] = useState(true);
    const [screenSize, setScreenSize] = useState(null);

    useEffect(() => {
        const handleResize = () => setScreenSize(window.innerWidth);

        window.addEventListener("resize", handleResize);

        handleResize();

        return () => window.removeEventListener("resize", handleResize);
    }, []);

    useEffect(() => {
        if (screenSize < 768) {
            setActiveMenu(false);
        } else {
            setActiveMenu(true);
        }
    }, [screenSize]);

    return (
        <div className="nav-container">
            <div className="logo-container">
                <Avatar src={icon} size="large" />
                <Title level={2} className="logo">
                    <Link to="/">Cryptoland</Link>
                </Title>
                <Button
                    className="menu-control-container"
                    onClick={() => setActiveMenu(!activeMenu)}
                >
                    <MenuOutlined />
                </Button>
            </div>
            {activeMenu && (
                <Menu theme="dark">
                    <Item icon={<HomeOutlined />}>
                        <Link to="/">Home</Link>
                    </Item>
                    <Item icon={<FundOutlined />}>
                        <Link to="/cryptocurrencies">Cryptocurrencies</Link>
                    </Item>
                    {/* <Item icon={<MoneyCollectOutlined />}>
                        <Link to="/exchanges">Exchanges</Link>
                    </Item> */}
                    <Item icon={<BulbOutlined />}>
                        <Link to="/news">News</Link>
                    </Item>
                </Menu>
            )}
        </div>
    );
};

export default Navbar;
