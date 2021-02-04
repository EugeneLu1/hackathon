import React, { useEffect } from "react";
import { createStructuredSelector } from "reselect";
import { compose } from "redux";
import { connect } from "react-redux";

import { injectReducer, injectSaga } from "redux-injectors";

import reducer from "./reducer";
import saga from "./saga";
import { ContainerState } from "./types";
import {
  Box,
  makeStyles,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TableSortLabel,
  Typography,
} from "@material-ui/core";
import { SortOrder, SortType } from "./constants";
import makeSelectApp from "./selectors";
import { getSurveys, sortSurveys } from "./actions";

const useStyles = makeStyles(() => ({
  popoverButton: {
    textTransform: "none",
    display: "block",
    width: "100%",
    textAlign: "left",
  },
  table: {
    minWidth: 650,
  },
  tableScroll: {
    maxHeight: "70vh",
  },
  tableContainer: {
    tableLayout: "fixed",
    whiteSpace: "nowrap",
  },
  tableHeaders: {
    height: 50,
  },
  tableRow: {
    height: 45,
  },
  subject: {
    fontSize: 14,
  },
}));

const getTextBox = (label: string, variant: "h5" | "body1") => (
  <Typography component="div" variant={variant}>
    <Box>{label}</Box>
  </Typography>
);

function getTableHeader(
  key: any,
  type: SortType,
  props: { onClickSort: any; order: SortOrder; orderBy: any },
  label: string
) {
  const tableCellLabel = (
    <TableSortLabel
      aria-label="sort-button"
      active={props.orderBy === key}
      direction={props.order}
      onClick={() => props.onClickSort(key, type)}
    >
      <Typography component="div" variant="caption">
        <Box fontWeight="fontWeightBold" fontSize={14}>
          {label}
        </Box>
      </Typography>
    </TableSortLabel>
  );
  return (
    <TableCell
      sortDirection={props.orderBy === key ? props.order : false}
      align="left"
    >
      {tableCellLabel}
    </TableCell>
  );
}

export const App = ({
  app,
  onLoadGetSurveys,
  onClickSort,
}: {
  app: ContainerState;
  onLoadGetSurveys: any;
  onClickSort: any;
}) => {
  const { surveys, error, order, orderBy } = app;
  useEffect(() => onLoadGetSurveys(), []);

  const classes = useStyles();

  const tableHeadProps = {
    onClickSort,
    order,
    orderBy,
  };

  if (error) {
    console.log("unexpected error");
  }

  return (
    <Paper>
      <TableContainer className={classes.tableScroll}>
        <Box>
          <Table
            size="small"
            className={classes.table}
            aria-label="simple table"
            stickyHeader
          >
            <colgroup>
              <col style={{ width: "50%" }} />
              <col style={{ width: "50%" }} />
            </colgroup>
            <TableHead className={classes.tableContainer}>
              <TableRow className={classes.tableHeaders}>
                {getTableHeader(
                  "id",
                  SortType.NUMBER_SORT_TYPE,
                  tableHeadProps,
                  "SurveyId"
                )}
                {getTableHeader(
                  "score",
                  SortType.NUMBER_SORT_TYPE,
                  tableHeadProps,
                  "Score"
                )}
              </TableRow>
            </TableHead>
            <TableBody>
              {surveys.map((row) => {
                return (
                  <TableRow key={row.id} className={classes.tableRow}>
                    <TableCell>{getTextBox(row.id, "body1")}</TableCell>
                    <TableCell>
                      <TableCell>{getTextBox(row.score, "body1")}</TableCell>
                    </TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </Box>
      </TableContainer>
    </Paper>
  );
};

const mapStateToProps = createStructuredSelector({
  app: makeSelectApp(),
});

export function mapDispatchToProps(dispatch) {
  return {
    onLoadGetSurveys: () => {
      dispatch(getSurveys());
    },
    onClickSort: (columnKey: any, columnType: SortType) => {
      dispatch(sortSurveys(columnKey, columnType));
    },
  };
}

export default compose(
  injectReducer({ key: "app", reducer }),
  injectSaga({ key: "app", saga }),
  connect(mapStateToProps, mapDispatchToProps)
);
