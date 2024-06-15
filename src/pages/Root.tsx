import { Outlet } from "react-router-dom";

import Header from "../components/Header/Header";
import Wrapper from "../components/UI/Wrapper/Wrapper";
import Main from "../components/UI/Main/Main";
import Sidebar from "../components/UI/Sidebar/Sidebar";
import Content from "../components/UI/Content/Content";

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