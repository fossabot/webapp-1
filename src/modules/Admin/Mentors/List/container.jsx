import React from 'react';
import PropTypes from 'prop-types';
import { createSelector } from 'reselect';
import { connect } from 'react-redux';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

import Loading from 'shared/components/Loading';
import { fetchMentors } from './actions';

import {
  selectAllTimeslotsCount,
  selectMentors,
  selectMentorsFetching,
  selectMentorsFetchingError,
} from './selectors';

import MentorRow from './components/MentorRow';

class Mentors extends React.Component {
  componentDidMount() {
    this.props.onFetchMentors();
  }

  render() {
    const {
      props: {
        allTimeslotsCount,
        mentors,
        mentorsFetching,
        mentorsFetchingError,
      },
    } = this;

    return (
      <React.Fragment>
        <Grid container justify="space-between" alignItems="flex-end">
          <Grid item xs={12} md={6}>
            <Typography variant="display1" gutterBottom>
              Ментори
            </Typography>
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography variant="subheading" gutterBottom align="right">
              Кількість менторів:&nbsp;
              {mentors.length}
              ,&nbsp;Кількість уроків:&nbsp;
              {allTimeslotsCount}
            </Typography>
          </Grid>
        </Grid>

        {mentorsFetching && <Loading />}

        {mentorsFetchingError && <div>{mentorsFetchingError.message}</div>}

        {!mentorsFetching && !mentorsFetchingError && (
          <Paper>
            <Table>
              <TableHead>
                <TableRow selected>
                  <TableCell>Ім&apos;я</TableCell>
                  <TableCell>Пошта</TableCell>
                  <TableCell>Телефон</TableCell>
                  <TableCell>
                    Кількість уроків
                    <br />
                    (підтверджено / всього)
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {mentors.map(mentor => (
                  <MentorRow
                    key={mentor.uid}
                    mentor={mentor}
                  />
                ))}
              </TableBody>
            </Table>
          </Paper>
        )}
      </React.Fragment>
    );
  }
}

Mentors.propTypes = {
  allTimeslotsCount: PropTypes.number.isRequired,
  onFetchMentors: PropTypes.func.isRequired,
  mentors: PropTypes.instanceOf(Array),
  mentorsFetching: PropTypes.bool.isRequired,
  mentorsFetchingError: PropTypes.instanceOf(Object),
};

Mentors.defaultProps = {
  mentors: [],
  mentorsFetchingError: null,
};

const mapStateToProps = createSelector(
  selectAllTimeslotsCount(),
  selectMentors(),
  selectMentorsFetching(),
  selectMentorsFetchingError(),
  (
    allTimeslotsCount,
    mentors,
    mentorsFetching,
    mentorsFetchingError,
  ) => ({
    allTimeslotsCount,
    mentors,
    mentorsFetching,
    mentorsFetchingError,
  }),
);

const mapDispatchToProps = {
  onFetchMentors: fetchMentors,
};

export default connect(mapStateToProps, mapDispatchToProps)(Mentors);
