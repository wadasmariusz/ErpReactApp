import React, {useEffect} from "react";
import {InputTextPure} from "../../../../../components/form/text/Text/Input_Text.pure";
import {Button, Col, Row} from "reactstrap";
import {Search} from "react-bootstrap-icons";

export const SheetsFilterBox = ({
                                    filters,
                                    setSearch,
                                    applyFilters = () => {
                                    }
                                  }) => {
  const {
    search,
    category,
    kind
  } = filters;

  useEffect(() => {
    applyFilters();
  }, [category, kind])

  return (
    <>
      <div className="card mt-1">
        <div className="card-body">
          <Row>
            <Col xs={12} lg={3}>
              <InputTextPure
                name="search"
                value={search}
                className="m-0"
                label={"Szukaj"}
                onChange={setSearch}
                icon={<Search size={15}/>}
                onEnter={applyFilters}
              />
            </Col>
            <Col xs={12} lg={2} className="d-flex align-items-center">
              <Button
                color="primary"
                outline
                className="m-auto"
                onClick={applyFilters}
              >
                {"Filtruj"}
              </Button>
            </Col>
          </Row>
        </div>
      </div>
    </>
  );
};
