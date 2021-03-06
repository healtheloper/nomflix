/* eslint-disable react/no-typos */
import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import Section from "Components/Section";

const Container = styled.div`
    padding: 0px 10px;
`;

const HomePresenter = ({nowPlaying, popular, upcoming, loading, error}) => 
    loading ? null : (
        <Container>
            {nowPlaying && nowPlaying.length > 0 && (
                <Section title="Now Playing">
                    {nowPlaying.map(movie => 
                        (<span key={movie.id}>{movie.title}</span>)
                        )}
                </Section>
            )}
            {upcoming && upcoming.length > 0 && (
                <Section title="Now Playing">
                    {upcoming.map(movie => (
                    <span key={movie.id}>{movie.title}</span>
                    ))}
                </Section>
            )}
            {popular && popular.length > 0 && (
                <Section title="Now Playing">
                    {popular.map(movie => (
                    <span key={movie.id}>{movie.title}</span>
                    ))}
                </Section>
            )}
        </Container>
    );

    HomePresenter.PropTypes = {
        nowPlaying: PropTypes.array,
        popular: PropTypes.array,
        upcoming: PropTypes.array,
        loading: PropTypes.bool.isRequired,
        error:PropTypes.string
    };

    export default HomePresenter;