const { gql, default: request } = require("graphql-request");

const MASTER_URL = `https://ap-south-1.cdn.hygraph.com/content/${process.env.NEXT_PUBLIC_MASTER_URL_KEY}/master`;

const getCategory = async () => {
  const query = gql`
    query Category {
      categories {
        bgcolor {
          hex
        }
        id
        name
        icon {
          url
        }
      }
    }
  `;

  const result = await request(MASTER_URL, query);
  return result;
};

const getAllBusinessList = async () => {
  const query = gql`
    query BusinessList {
      businessLists {
        about
        address
        category {
          name
        }
        contactPerson
        email
        images {
          url
        }
        id
        name
      }
    }
  `;
  const result = await request(MASTER_URL, query);
  return result;
};

const getBusinessByCategory = async (category) => {
  const query = gql`
    query BusinessByCategory($category: String!) {
      businessLists(where: { category: { name: $category } }) {
        about
        address
        category {
          name
        }
        contactPerson
        email
        id
        name
        images {
          url
        }
      }
    }
  `;
  const variables = { category };
  const result = await request(MASTER_URL, query, variables);
  return result;
};

const getBusinessById = async (id) => {
  const query = gql`
    query GetBusinessById($id: ID!) {
      businessList(where: { id: $id }) {
        about
        address
        category {
          name
        }
        contactPerson
        email
        id
        name
        images {
          url
        }
      }
    }
  `;
  const variables = { id };
  const result = await request(MASTER_URL, query, variables);
  return result;
};

const createNewBooking = async (businessId, date, time, userEmail, userName) => {
  const mutationQuery = gql`
    mutation CreateBooking(
      $businessId: ID!
      $date: String!
      $time: String!
      $userEmail: String!
      $userName: String!
    ) {
      createBooking(
        data: {
          bookingStatus: Booked
          businessList: { connect: { id: $businessId } }
          date: $date
          time: $time
          userEmail: $userEmail
          userName: $userName
        }
      ) {
        id
      }
      publishManyBookings(to: PUBLISHED) {
        count
      }
    }
  `;
  const variables = { businessId, date, time, userEmail, userName };
  const result = await request(MASTER_URL, mutationQuery, variables);
  return result;
};

const BusinessBookedSlot = async (businessId, date) => {
  const query = gql`
    query BusinessBookedSlot($businessId: ID!, $date: String!) {
      bookings(where: { businessList: { id: $businessId }, date: $date }) {
        date
        time
      }
    }
  `;
  const variables = { businessId, date };
  const result = await request(MASTER_URL, query, variables);
  return result;
};

const GetUserBookingHistory = async (userEmail) => {
  const query = gql`
    query GetUserBookingHistory($userEmail: String!) {
      bookings(
        where: { userEmail: $userEmail }
        orderBy: publishedAt_DESC
      ) {
        businessList {
          name
          images {
            url
          }
          contactPerson
          address
        }
        date
        time
        id
      }
    }
  `;
  const variables = { userEmail };
  const result = await request(MASTER_URL, query, variables);
  return result;
};

const deleteBooking = async (bookingId) => {
  const mutationQuery = gql`
    mutation DeleteBooking($bookingId: ID!) {
      updateBooking(
        data: { userName: "RRRS" }
        where: { id: $bookingId }
      ) {
        id
      }
    }
  `;
  const variables = { bookingId };
  const result = await request(MASTER_URL, mutationQuery, variables);
  return result;
};

export default {
  getCategory,
  getAllBusinessList,
  getBusinessByCategory,
  getBusinessById,
  createNewBooking,
  BusinessBookedSlot,
  GetUserBookingHistory,
  deleteBooking,
};
