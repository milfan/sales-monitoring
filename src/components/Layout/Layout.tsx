// Layout.tsx
import {
    Layout as AntLayout,
    Menu,
    type MenuProps,
} from "antd";
import {
    MenuOutlined,
} from "@ant-design/icons";
import { useState } from "react";
import { useNavigate, Routes, Route } from "react-router-dom";
import { itemsMenu } from "../../routes";
import { extractRoutes } from "../../utils/getRoutesFromMenu";

const { Header, Sider, Content, Footer } = AntLayout;

export default function Layout() {
    const [collapsed, setCollapsed] = useState(false);

    const navigate = useNavigate();
    const dynamicRoutes = extractRoutes(itemsMenu);
    const menuItemsForDisplay = itemsMenu.map(({ ...item }) => item);

    const handleClick: MenuProps['onClick'] = ({ key }) => {
        navigate(`/${key}`);
    };
    return (
        <AntLayout style={{ width: "100vw", minHeight: "100vh" }}>
            <Sider
                collapsible
                collapsed={collapsed}
                trigger={null}
                width={250}
                style={{
                    height: "100vh",
                    position: "fixed",
                    left: 0,
                    top: 0,
                    zIndex: 1000,
                }}
            >
                {/* Logo & Toggle Button */}
                <div
                    style={{
                        height: 64,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        padding: "0 16px",
                        color: "white",
                    }}
                >
                    <img
                        src="vite.svg"
                        alt="Logo"
                        style={{
                            height: 32,
                            transition: "all 0.3s",
                            objectFit: "contain",
                        }}
                    />
                </div>

                <Menu
                    defaultSelectedKeys={['dashboard']}
                    defaultOpenKeys={['dashboard']}
                    mode="inline"
                    theme="dark"
                    inlineCollapsed={collapsed}
                    items={menuItemsForDisplay}
                    onClick={handleClick}
                />
            </Sider>

            <AntLayout style={{ marginLeft: collapsed ? 80 : 250, transition: "all 0.2s" }}>
                <Header
                    style={{
                        background: "#fff",
                        padding: "0 24px",
                        display: "flex",
                        alignItems: "center",
                        boxShadow: "0 1px 4px rgba(0,21,41,.08)",
                        position: "fixed",
                        width: "100%",
                        zIndex: 999,
                    }}
                >
                    <div
                        onClick={() => setCollapsed(!collapsed)}
                        style={{ cursor: "pointer", marginRight: "20px" }}
                    >
                        {collapsed ? <MenuOutlined /> : <MenuOutlined />}
                    </div>
                    <h2 style={{ margin: 0 }}>Dashboard Header</h2>
                </Header>

                <AntLayout style={{ marginTop: "60px", padding: "20px" }}>
                    <Content>
                        <div
                            style={{
                                padding: 24,
                                background: "#fff",
                                minHeight: 360,
                                borderRadius: 8,
                            }}
                        >

                            <Routes>
                                {dynamicRoutes.map((e) => (
                                    <Route key={e.path} path={e.path} element={e.element} />
                                ))}
                            </Routes>
                        </div>
                    </Content>
                </AntLayout>

                <Footer style={{ textAlign: "center" }}>
                    By Warkop Developer ©{new Date().getFullYear()}
                </Footer>
            </AntLayout>
        </AntLayout>
    );
}
