import { Drawer, Toolbar, List, Grid, ListItem } from "@mui/material";

const TopNavigator = props => {

    const {
        items = [],
        ...other
    } = props;

    return (
        <Drawer
            {...other}
            anchor={"top"}
        >
            <Toolbar/>
            <List>
                <Grid
                    container
                >
                    {items?.map((item, itemKey) => (
                        <Grid item xs={12} sm={6} key={itemKey}>
                            <ListItem button>{item.label}</ListItem>
                        </Grid>
                    ))}
                </Grid>
            </List>
        </Drawer>
    );
}

export default TopNavigator;