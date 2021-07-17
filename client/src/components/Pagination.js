import { PaginationList, PaginationButton, PaginationArrow } from '../styles/styles'

const MAX_ITEMS = 3
const MAX_LEFT = (MAX_ITEMS - 1) / 2

function Pagination ({ limit, total, offset, setOffset }) {
  const current = offset ? (offset / limit) + 1 : 1
  const pages = Math.ceil(total / limit)
  const first = Math.max(current - MAX_LEFT, 1)

  function paginate (page) {
    if (page <= pages) {
      setOffset((page - 1) * limit)
    }
  }

  return (
    <PaginationList>
      <PaginationArrow>
        <button
          onClick={() => paginate(current - 1)}
          disabled={current === 1}
        >
          {'<'}
        </button>
      </PaginationArrow>
      {Array.from({ length: Math.min(MAX_ITEMS, pages) })
        .map((_, index) => index + first)
        .map(page => {
          return page <= pages && (
            <PaginationButton key={page}>
              <button 
                onClick={() => paginate(page)}
                className={page === current ? 'active' : ''}
              >
                {page}
              </button>
            </PaginationButton>
          )
        })
      }
      <PaginationArrow>
        <button
          onClick={() => paginate(current + 1)}
          disabled={current === pages}
        >
          {'>'}
        </button>
      </PaginationArrow>
    </PaginationList>
  )
}

export default Pagination