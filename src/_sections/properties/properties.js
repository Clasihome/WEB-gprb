import React, { useCallback } from 'react';
import styled from 'styled-components';
import { Container, Row, Col } from 'react-grid-system';
import { PropertyCard as Card } from '../../_components/cards';
import { useProperties } from '../../_hooks';
import { LoadingOutlined, FrownOutlined, LeftOutlined, RightOutlined, ArrowLeftOutlined, ArrowRightOutlined } from '@ant-design/icons'
import ReactPaginate from 'react-paginate';
import { getSearchParams } from 'gatsby-query-params';
import { urlBuilder } from '../../_util';
import { navigate } from 'gatsby';

const NavPaginate = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem 0;
  outline: none !important;
  .paginateCont{
    list-style: none;
    display: flex;
    align-items: center;
    outline: none !important;
  }
  .pagination-page{
    width: 30px;
    height: 30px;
    border-radius: 50%;
    color: ${props => props.theme.main.primaryColor};
    margin: 0 .5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: 250ms ease;
    outline: none !important;
    &:hover{
      color: ${props => props.theme.main.primaryColor};
      //background-color: ${props => props.theme.main.primaryColor};
    }
  }
  .active-pagination-page{
    color: ${props => props.theme.main.primaryColor};
    //background-color: ${props => props.theme.main.primaryColor};
    outline: none !important;
  }
  .back-button-paginate{
    color: ${props => props.theme.main.primaryColor};
    cursor: pointer;
    outline: none !important;
  }
  .next-button-paginate{
    color: ${props => props.theme.main.primaryColor};
    cursor: pointer;
    outline: none !important;
  }
  .control-disabled{
    color: #919191;
    outline: none !important;
  }
`
const NavArrow = styled.button`
  background: transparent;
  border: none;
  cursor: pointer;
  color: #919191;
  transition: 250ms ease;
  &:hover{
    color: ${props => props.theme.main.primaryColor};
  }
`
const NavNumber = styled(NavArrow)`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  color: #919191;
  margin: 0 1rem;
  &:hover{
    color: ${props => props.theme.main.primaryColor};
  }
`
const StandCont = styled.div`
  min-height: 50vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 2rem;
  color: ${props => props.loading ? props.theme.main.primaryColor : "#979797"};
`
const NoDataCont = styled(StandCont)`
  color: #979797;
`

export default ({ location })=> {
  const { data, loading, error } = useProperties({ location });
  const params = getSearchParams();

  const handlePaginate = useCallback((val)=> {
    if(params){
      console.log(val.selected);
      const url = urlBuilder('/properties',{...params, page: val.selected} );
      navigate(url);
    }
  },[params])

  if(loading) return (
    <StandCont loading>
      <LoadingOutlined />
      <p>Cargando...</p>
    </StandCont>
  )
  if(error) return (
    <StandCont>
      <FrownOutlined />
      <p>Error de conexión</p>
    </StandCont>
  );

  return(
    <Container>
      <div style={{ paddingTop: '5rem' }}>
      <Row>
          {
            data.properties.map(p => (
              <Col key={p.mainImage} xs={12} md={4} style={{ margin: "1rem 0" }}>
                <Card {...p} />
              </Col>
            ))
          }
          {
            data.totalRegistersQuery > 6
            && (
              <Col xs={12}>
                <NavPaginate>
                  <ReactPaginate
                    pageCount={data.totalRegistersQuery / 6}
                    marginPagesDisplayed={2}
                    pageRangeDisplayed={4}
                    containerClassName="paginateCont"
                    activeClassName="pagination-page-active"
                    pageClassName="pagination-page"
                    previousLabel={<LeftOutlined />}
                    previousClassName="back-button-paginate"
                    nextLabel={<RightOutlined />}
                    nextClassName="next-button-paginate"
                    disabledClassName="control-disabled"
                    activeClassName="active-pagination-page"
                    onPageChange={handlePaginate}
                    initialPage={parseInt(data.page, 10)}
                    disableInitialCallback={true}
                  />
                </NavPaginate>
              </Col>
            )
          }
          {
            data.totalRegistersQuery === 0 &&            (
              <Col xs={12}>
                <NoDataCont>
                  <FrownOutlined />
                  <p>No se encontraron resultados</p>
                </NoDataCont>                
              </Col>
            )
          }          
        </Row>
      </div>
    </Container>
  )
}