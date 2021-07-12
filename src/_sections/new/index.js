import React, { useContext } from 'react';
import Context from '../../_context';
import styled from 'styled-components';
import { Container, Row, Col } from 'react-grid-system';
import { NewsCard } from '../../_components/cards';

const MainCont = styled.article`

`
const Header = styled.header`
  background-image: linear-gradient(0deg, rgba(0, 0, 0, .5) 40%, transparent), url(${props => props.theme.singleNew.hero.background});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  color: #fff;
`
const InnerHeader = styled.div`
    min-height: 60vh;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content:center;
`
const HeaderTitle = styled.h1`
  margin-top: 0;
  max-width: 50%;
`
const HeaderDateContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin-top: 4rem;
`
const HeaderDate = styled.p `
  margin-right: 2rem;
`
const Tag = styled.p`
  padding: 5px 19px;
  border-radius: 20px;
  background: ${props => props.theme.main.primaryColor};
  color: #fff;
  user-select: none;
`
const IntroCont = styled.div`
  padding: 4rem 0 0;
`
const IntroFooter = styled.div`
  border-top: 1px solid #dadada;
  border-bottom: 1px solid #dadada;
  margin: 4rem 0;
  padding: 2rem 0;
  background-color: ${props => props.theme.main.primaryColor};
  font-weight: bold;
  color: #fff;
  padding: 2rem;
  border-radius: 12px;
`
const SocialCont = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  margin-top: 1rem;
`
const SocialItem = styled.li`

`
const SvgIcon = styled.svg`
  fill: ${props => props.theme.main.primaryColor};
  margin-right: .5rem;
`
const SocialNav = styled.a`
  color: #212121;
  text-decoration: none; 
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
  &:visited{
    color: #212121;
  }
`
const SocialSpan = styled.span`
  opacity: 0;
  transition: 250ms ease;
  color: ${props => props.theme.main.primaryColor};
  ${SocialNav}:hover & {
    opacity: 1;
  }
`
const ArticleCont = styled.div`

`
const ArticleImg = styled.img`
  width: 100%;
`
const RelatedNewsCont = styled.div`
  margin-top: 6rem;
`
const RelatedNewsTitle = styled.div`
  margin: 4rem 0;
  font-weight: bold;
`

export default ()=> {
  const state = useContext(Context).singleNew;
  const relatedNews = useContext(Context).news.items;
  return(
    <MainCont>
      <Header>
        <Container>
          <InnerHeader>
          <HeaderTitle>
            {state.hero.title}
          </HeaderTitle>
          </InnerHeader>
        </Container>
      </Header>
      <Container>
          <HeaderDateContainer>
            <HeaderDate>
              {state.hero.date}
            </HeaderDate>
            <Tag>
              {state.hero.tag}
            </Tag>
          </HeaderDateContainer>        
      </Container>
      <IntroCont>
        <Container>
          <Row>
            <Col xs={12} md={6}>
              <div dangerouslySetInnerHTML={{ __html: state.intro.title }} />
              <IntroFooter>
                <p style={{ margin:0 }}>
                  {state.intro.footer}
                </p>
              </IntroFooter>
            </Col>
            <Col xs={12} md={6}>
              <SocialCont>
                <SocialItem>
                  <SocialNav href="https://www.facebook.com" target="_blank">
                    <SvgIcon width="29" height="29" fill="none" version="1.1" viewBox="0 0 29 29" xmlns="http://www.w3.org/2000/svg">
                      <path d="m14.457 0a14.5 14.5 0 0 0-14.457 14.5 14.5 14.5 0 0 0 14.5 14.5 14.5 14.5 0 0 0 14.5-14.5 14.5 14.5 0 0 0-14.5-14.5 14.5 14.5 0 0 0-0.042969 0zm0.91016 6h2.6328v2.9805h-1.9355c-0.3833 0-0.76953 0.39326-0.76953 0.68555v1.957h2.7012c-0.1087 1.5007-0.33203 2.873-0.33203 2.873h-2.3828v8.5039h-3.5527v-8.5059h-1.7285v-2.8613h1.7285v-2.3398c0-0.42786-0.087828-3.293 3.6387-3.293z" />
                    </SvgIcon>                    
                    <SocialSpan>Compartir en facebook</SocialSpan>
                  </SocialNav>
                </SocialItem>
                <SocialItem>
                  <SocialNav href="https://www.instagram.com" target="_blank">
                    <SvgIcon width="29" height="29" fill="none" version="1.1" viewBox="0 0 29 29" xmlns="http://www.w3.org/2000/svg">
                      <path d="m14.457 0a14.5 14.5 0 0 0-14.457 14.5 14.5 14.5 0 0 0 14.5 14.5 14.5 14.5 0 0 0 14.5-14.5 14.5 14.5 0 0 0-14.5-14.5 14.5 14.5 0 0 0-0.042969 0zm-2.916 6h6.6504c3.0602 0 5.543 2.4808 5.543 5.541v6.6504c0 3.0602-2.4828 5.543-5.543 5.543h-6.6504c-3.0603 0-5.541-2.4828-5.541-5.543v-6.6504c0-3.0603 2.4808-5.541 5.541-5.541zm0 1.6621c-2.1392 0-3.8789 1.7397-3.8789 3.8789v6.6504c0 2.1392 1.7397 3.8809 3.8789 3.8809h6.6504c2.1392 0 3.8809-1.7417 3.8809-3.8809v-6.6504c0-2.1392-1.7417-3.8789-3.8809-3.8789h-6.6504zm3.3262 2.7715c2.4484 0 4.4336 1.9852 4.4336 4.4336 0 2.4484-1.9852 4.4336-4.4336 4.4336-2.4484 0-4.4336-1.9852-4.4336-4.4336 0-2.4484 1.9852-4.4336 4.4336-4.4336zm0 1.6621c-1.5273 0-2.7715 1.243-2.7715 2.7715 0 1.5273 1.2442 2.7715 2.7715 2.7715 1.5273 0 2.7715-1.2442 2.7715-2.7715 0-1.5285-1.2442-2.7715-2.7715-2.7715z"/>
                    </SvgIcon>
                    <SocialSpan>Compartir en instagram</SocialSpan>
                  </SocialNav>
                </SocialItem>                
              </SocialCont>
            </Col>            
          </Row>
        </Container>
      </IntroCont>
      <ArticleCont>
        <Container>
          <Row>
            <Col xs={12} md={6}>
              <ArticleImg src={state.article.image} />
              <div dangerouslySetInnerHTML={{ __html: state.article.text }} />
            </Col>
          </Row>
        </Container>
      </ArticleCont>
      <RelatedNewsCont>
        <Container>
          <RelatedNewsTitle>
            Noticias relacionadas
          </RelatedNewsTitle>
          <Row>
            {
              relatedNews.slice(0, 3).map(item => (
                <Col key={item.id} xs={12} md={4}>
                  <NewsCard {...item} />
                </Col>
              ))
            }
          </Row>
        </Container>
      </RelatedNewsCont>
    </MainCont>
  )
}