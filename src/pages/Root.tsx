import { Outlet } from "react-router-dom";

import Header from "../components/Layout/Header/Header";
import Wrapper from "../components/Layout/Wrapper/Wrapper";
import Main from "../components/Layout/Main/Main";
import Sidebar from "../components/Layout/Sidebar/Sidebar";
import Content from "../components/Layout/Content/Content";

const Root = () => {
    return (
        <Wrapper>
            <Header />
            <Main>
                <Sidebar/>
                <Content>
                    <Outlet></Outlet>
                </Content>
            </Main>
        </Wrapper>
    );
}

export default Root;