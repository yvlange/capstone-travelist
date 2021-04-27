<div className="form">
  <div className="form__destination__bg">
    <Disclosure>
      {({ open }) => (
        <>
          <Disclosure.Button className="form__destination__area">
            <span>enter destination</span>
            <BsChevronUp className={`${open ? "transform rotate-180" : ""}`} />
          </Disclosure.Button>
          <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
            <form>
              <input id="destination" type="text" placeholder="destination" />
            </form>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
    <Disclosure>
      {({ open }) => (
        <>
          <Disclosure.Button className="form__activities__area">
            <FiPlus />
            <span>activities</span>
          </Disclosure.Button>
          <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
            <form>
              <input id="destination" type="text" placeholder="activities" />
            </form>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  </div>
</div>;
