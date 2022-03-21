import React, { useEffect, useState } from 'react';
import { Formik, Form } from 'formik';
import useCollapse from 'react-collapsed';
import { FaAngleUp, FaAngleDown } from 'react-icons/fa';
import { Layout } from '../components/layout';
import { Toggle } from '../components/fields/toggle';
import { Select } from '../components/fields/select';
import { Button } from '../components/button';
import schema from '../components/data/schema';
import { KeyValueTable, Row } from '../components/key-value-table';

function MainPage() {
  const { getCollapseProps, getToggleProps, isExpanded } = useCollapse();
  const [submitted, setSubmitted] = useState<boolean>(false);
  const [general, setGeneral] = useState<[]>([]);
  const [alerts, setAlerts] = useState<[]>([]);
  const [users, setUsers] = useState<[]>([]);

  useEffect(() => {
    setGeneral(schema.general[0].fields);
    setAlerts(schema.alerts[0].fields);
    setUsers(schema.users[0].fields);
    console.log(schema);
  }, []);

  function handleSubmit(values: any) {
    setSubmitted(true);
    console.log(values);
  }

  const initialValues = {
    ...schema,
  };
  return (
    <Layout title="Settings" content="Display setting">
      <div>
        {submitted ? <span id="submitted"></span> : null}
        <Formik
          form
          initialValues={initialValues}
          //validate={validator}
          onSubmit={handleSubmit}
          enableReinitialize={true}
        >
          {({ values, submitForm }) => (
            <Form>
              <div className="row" id="text">
                <div className="col-12">
                  <KeyValueTable title="General">
                    <div className="row">
                      {general.map((data: any, index: any) => {
                        return (
                          <div
                            className="col-md-4 col-12 form-group"
                            key={index}
                          >
                            <Row label={data.label}>
                              <Toggle
                                type="checkbox"
                                name={data.field}
                                id={data.id}
                                onChange={submitForm}
                              />
                            </Row>
                          </div>
                        );
                      })}
                    </div>
                  </KeyValueTable>
                </div>
                <div className="col-md-4 col-12">
                  <KeyValueTable title="Settings">
                    <div className="row">
                      <div className="col-12 form-group">
                        {users.map((data: any, index: any) => {
                          if (data.subList === false) {
                            return (
                              <div key={index}>
                                <Row label={data.label}>
                                  <Toggle
                                    type="checkbox"
                                    name={data.field}
                                    id={data.id}
                                    onChange={submitForm}
                                  />
                                </Row>
                              </div>
                            );
                          } else if (data.subList === true) {
                            return isExpanded ? (
                              <div key={index}>
                                <Row label={data.label}>
                                  <Toggle
                                    type="checkbox"
                                    name={data.field}
                                    id={data.id}
                                    onChange={submitForm}
                                  />
                                  {values.user.users ? (
                                    <span
                                      className="searchIcon"
                                      {...(values.user.users &&
                                        getToggleProps())}
                                    >
                                      <FaAngleUp />
                                    </span>
                                  ) : (
                                    <span
                                      className="searchIcon"
                                      {...(values.user.users &&
                                        getToggleProps())}
                                    >
                                      <FaAngleDown />
                                    </span>
                                  )}
                                </Row>
                              </div>
                            ) : (
                              <div key={index}>
                                <Row label={data.label}>
                                  <Toggle
                                    type="checkbox"
                                    name={data.field}
                                    id={data.id}
                                    onChange={submitForm}
                                  />
                                  <span
                                    className="searchIcon"
                                    {...(values.user.users && getToggleProps())}
                                  >
                                    <FaAngleDown />
                                  </span>
                                </Row>
                              </div>
                            );
                          } else {
                            return (
                              values.user.users && (
                                <div {...getCollapseProps()}>
                                  <div className="content">
                                    {data.select ? (
                                      <div key={index}>
                                        <Row
                                          label={data.label}
                                          className="labelContent"
                                          classNameValue="labelContentValue"
                                        >
                                          <Select
                                            name={data.selectValue}
                                            id={data.selectValue}
                                            onChange={submitForm}
                                            disabled={
                                              !values.user.maxUsers.valid &&
                                              true
                                            }
                                            options={[
                                              {
                                                label: 1,
                                                value: 1,
                                              },
                                              {
                                                label: 2,
                                                value: 2,
                                              },
                                              {
                                                label: 3,
                                                value: 3,
                                              },
                                              {
                                                label: 4,
                                                value: 4,
                                              },
                                              {
                                                label: 5,
                                                value: 5,
                                              },
                                              {
                                                label: 6,
                                                value: 6,
                                              },
                                              {
                                                label: 7,
                                                value: 7,
                                              },
                                              {
                                                label: 8,
                                                value: 8,
                                              },
                                              {
                                                label: 9,
                                                value: 9,
                                              },
                                              {
                                                label: 10,
                                                value: 10,
                                              },
                                            ]}
                                          />
                                          <Toggle
                                            type="checkbox"
                                            name={data.field}
                                            id={data.id}
                                            onChange={submitForm}
                                          />
                                        </Row>
                                      </div>
                                    ) : (
                                      <div key={index}>
                                        <Row
                                          label={data.label}
                                          className="labelContent"
                                          classNameValue="labelContentValue"
                                        >
                                          <Toggle
                                            type="checkbox"
                                            name={data.field}
                                            id={data.id}
                                            onChange={submitForm}
                                          />
                                        </Row>
                                      </div>
                                    )}
                                  </div>
                                </div>
                              )
                            );
                          }
                        })}
                      </div>
                    </div>
                  </KeyValueTable>
                </div>
                <div className="col-md-4 col-12">
                  <KeyValueTable title="Alerts">
                    <div className="row">
                      <div className="col-12 form-group">
                        {alerts.map((data: any, index: any) => (
                          <div key={index}>
                            {data.select === true ? (
                              <Row label={data.label}>
                                <Select
                                  name={data.selectValue}
                                  id={data.selectValue}
                                  onChange={submitForm}
                                  disabled={!values.alertRules.valid && true}
                                  options={[
                                    {
                                      label: 1,
                                      value: 1,
                                    },
                                    {
                                      label: 2,
                                      value: 2,
                                    },
                                    {
                                      label: 3,
                                      value: 3,
                                    },
                                    {
                                      label: 4,
                                      value: 4,
                                    },
                                    {
                                      label: 5,
                                      value: 5,
                                    },
                                    {
                                      label: 6,
                                      value: 6,
                                    },
                                    {
                                      label: 7,
                                      value: 7,
                                    },
                                    {
                                      label: 8,
                                      value: 8,
                                    },
                                    {
                                      label: 9,
                                      value: 9,
                                    },
                                    {
                                      label: 10,
                                      value: 10,
                                    },
                                  ]}
                                />
                                <Toggle
                                  type="checkbox"
                                  name={data.field}
                                  id={data.id}
                                  onChange={submitForm}
                                />
                              </Row>
                            ) : (
                              <Row label={data.label}>
                                <Toggle
                                  type="checkbox"
                                  name={data.field}
                                  id={data.id}
                                  onChange={submitForm}
                                />
                              </Row>
                            )}
                          </div>
                        ))}
                      </div>
                    </div>
                  </KeyValueTable>
                </div>
                <div className="col-12">
                  <div className="row">
                    <div className="col-6">
                      <Button format="success" type="submit">
                        Save
                      </Button>
                    </div>
                    <div className="col-6 rightAlign">
                      <Button format="danger" type="reset">
                        Cancel
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </Layout>
  );
}

export default MainPage;
