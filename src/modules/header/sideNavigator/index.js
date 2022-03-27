import { Drawer, Toolbar, List, ListItem, ButtonBase } from "@mui/material";
import CollapseContainer from "components/CollapseContainer";
import { useNavigate } from "react-router";

import styles from "./index.module.css";

const SideNavigator = props => {
    const {
        pages = [],
        ...other
    } = props;

    const navigate = useNavigate();

    const HandleLinkClick = link => navigate(link);

    return (
        <Drawer
            {...other}
            anchor={"left"}
            PaperProps={{
                style: {
                    width: "60%"
                }
            }}
        >
            <Toolbar/>
            <List>
                {pages?.map((page, pageKey) => page?.link ? 
                (<ButtonBase
                    key={pageKey}
                    onClick={() => HandleLinkClick(page?.link)}
                    className={styles.linkButton}
                >
                    <span>{page?.label}</span>
                </ButtonBase>) : 
                (<CollapseContainer
                        key={pageKey}
                        title={page?.label}
                        hideExpandLabel
                    >
                        {page?.items?.map((item, itemKey) => (
                            <ListItem
                                button
                                key={itemKey}
                                onClick={() => HandleLinkClick(item?.link)}
                            >
                                {item?.label}
                            </ListItem>
                        ))}
                    </CollapseContainer>
                ))}
            </List>
        </Drawer>
    );
}

export default SideNavigator;