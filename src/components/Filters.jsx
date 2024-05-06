import './Filters.css'

const Filters = () => {
  return (
    <section className='filters'>
      <div>
        <label htmlFor='price'>Price</label>
        <input type='range' id='price' min='0' max='1000' />
      </div>

      <div>
        <label htmlFor='category'>Category</label>
        <select id=''>
          <option value='all'>All</option>
          <option value="men's clothing">Men clothing</option>
          <option value='jewerly'>Jewerly</option>
        </select>
      </div>
    </section>
  );
};

export default Filters;
