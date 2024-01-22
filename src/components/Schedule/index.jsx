import Image from 'next/image'
import React, { useState } from 'react'

const Schedule = () => {
    const [open, setOpen] = useState(0);

    const handleToggler = (id) => {
        setOpen(id);
    }
    const data = [
        {
            heading: "1",
            content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque at ullam velit architecto repellat sint minus, quibusdam aspernatur? Esse quos alias autem, temporibus sit repellat eaque, doloribus laborum, nihil rem atque iusto eum nemo voluptatibus. Tempore dicta quis quo temporibus, quibusdam ipsum animi expedita libero? Vero voluptate, eum blanditiis dicta ipsam voluptates minus corrupti eius sed? Veritatis repellat delectus ullam, aperiam, consectetur temporibus dolor exercitationem eaque assumenda, esse quaerat impedit optio. Provident esse, neque mollitia ullam corporis laudantium eaque sit ducimus blanditiis pariatur, illum dolorem distinctio! Ipsum quas vel non optio, nemo voluptas animi corrupti perferendis blanditiis sunt veritatis? Reiciendis explicabo maiores, consequuntur corporis praesentium, dolor, a dolores perferendis mollitia eum possimus rem quod vel nesciunt ipsam. Amet esse quo excepturi unde nihil. Ut labore optio reprehenderit nam! Soluta blanditiis nulla dignissimos reiciendis mollitia facere modi delectus? Alias praesentium voluptates tempora ex labore laudantium debitis, ducimus nulla! Ab, ipsam quae?"
        },
        {
            heading: "1",
            content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque at ullam velit architecto repellat sint minus, quibusdam aspernatur? Esse quos alias autem, temporibus sit repellat eaque, doloribus laborum, nihil rem atque iusto eum nemo voluptatibus. Tempore dicta quis quo temporibus, quibusdam ipsum animi expedita libero? Vero voluptate, eum blanditiis dicta ipsam voluptates minus corrupti eius sed? Veritatis repellat delectus ullam, aperiam, consectetur temporibus dolor exercitationem eaque assumenda, esse quaerat impedit optio. Provident esse, neque mollitia ullam corporis laudantium eaque sit ducimus blanditiis pariatur, illum dolorem distinctio! Ipsum quas vel non optio, nemo voluptas animi corrupti perferendis blanditiis sunt veritatis? Reiciendis explicabo maiores, consequuntur corporis praesentium, dolor, a dolores perferendis mollitia eum possimus rem quod vel nesciunt ipsam. Amet esse quo excepturi unde nihil. Ut labore optio reprehenderit nam! Soluta blanditiis nulla dignissimos reiciendis mollitia facere modi delectus? Alias praesentium voluptates tempora ex labore laudantium debitis, ducimus nulla! Ab, ipsam quae?"
        },
        {
            heading: "1",
            content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque at ullam velit architecto repellat sint minus, quibusdam aspernatur? Esse quos alias autem, temporibus sit repellat eaque, doloribus laborum, nihil rem atque iusto eum nemo voluptatibus. Tempore dicta quis quo temporibus, quibusdam ipsum animi expedita libero? Vero voluptate, eum blanditiis dicta ipsam voluptates minus corrupti eius sed? Veritatis repellat delectus ullam, aperiam, consectetur temporibus dolor exercitationem eaque assumenda, esse quaerat impedit optio. Provident esse, neque mollitia ullam corporis laudantium eaque sit ducimus blanditiis pariatur, illum dolorem distinctio! Ipsum quas vel non optio, nemo voluptas animi corrupti perferendis blanditiis sunt veritatis? Reiciendis explicabo maiores, consequuntur corporis praesentium, dolor, a dolores perferendis mollitia eum possimus rem quod vel nesciunt ipsam. Amet esse quo excepturi unde nihil. Ut labore optio reprehenderit nam! Soluta blanditiis nulla dignissimos reiciendis mollitia facere modi delectus? Alias praesentium voluptates tempora ex labore laudantium debitis, ducimus nulla! Ab, ipsam quae? Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque at ullam velit architecto repellat sint minus, quibusdam aspernatur? Esse quos alias autem, temporibus sit repellat eaque, doloribus laborum, nihil rem atque iusto eum nemo voluptatibus. Tempore dicta quis quo temporibus, quibusdam ipsum animi expedita libero? Vero voluptate, eum blanditiis dicta ipsam voluptates minus corrupti eius sed? Veritatis repellat delectus ullam, aperiam, consectetur temporibus dolor exercitationem eaque assumenda, esse quaerat impedit optio. Provident esse, neque mollitia ullam corporis laudantium eaque sit ducimus blanditiis pariatur, illum dolorem distinctio! Ipsum quas vel non optio, nemo voluptas animi corrupti perferendis blanditiis sunt veritatis? Reiciendis explicabo maiores, consequuntur corporis praesentium, dolor, a dolores perferendis mollitia eum possimus rem quod vel nesciunt ipsam. Amet esse quo excepturi unde nihil. Ut labore optio reprehenderit nam! Soluta blanditiis nulla dignissimos reiciendis mollitia facere modi delectus? Alias praesentium voluptates tempora ex labore laudantium debitis, ducimus nulla! Ab, ipsam quae?"
        },
        {
            heading: "1",
            content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque at ullam velit architecto repellat sint minus, quibusdam aspernatur? Esse quos alias autem, temporibus sit repellat eaque, doloribus laborum, nihil rem atque iusto eum nemo voluptatibus. Tempore dicta quis quo temporibus, quibusdam ipsum animi expedita libero? Vero voluptate, eum blanditiis dicta ipsam voluptates minus corrupti eius sed? Veritatis repellat delectus ullam, aperiam, consectetur temporibus dolor exercitationem eaque assumenda, esse quaerat impedit optio. Provident esse, neque mollitia ullam corporis laudantium eaque sit ducimus blanditiis pariatur, illum dolorem distinctio! Ipsum quas vel non optio, nemo voluptas animi corrupti perferendis blanditiis sunt veritatis? Reiciendis explicabo maiores, consequuntur corporis praesentium, dolor, a dolores perferendis mollitia eum possimus rem quod vel nesciunt ipsam. Amet esse quo excepturi unde nihil. Ut labore optio reprehenderit nam! Soluta blanditiis nulla dignissimos reiciendis mollitia facere modi delectus? Alias praesentium voluptates tempora ex labore laudantium debitis, ducimus nulla! Ab, ipsam quae?"
        },
    ]
  return (
    <div className='py-[100px] shadow-xl overflow-auto'>
        <div className="container">
            <div className="grid gap-6 md:grid-cols-[20rem_1fr]">
                <div className="tab-nav">
                    <ul className="tab-nav__list">
                        { data && data.map((item, i) =>
                            <li key={i} className={`tab-nav__list-item ${i === open ? 'active': ''}`} onClick={() => handleToggler(i)}>
                                <div className='bg-primary text-white p-2 rounded-xl min-w-[6rem] w-[6rem] aspect-square inline-flex flex-col items-center justify-center text-center'>
                                    <div className="mb-1 text-sm">Mon</div>
                                    <h2 className="mb-0 text-3xl leading-[1] font-semibold">20</h2>
                                </div>
                                <div className='py-3 px-4'>
                                    <h3 className={`text-lg font-semibold ${i=== open ? 'text-white' : 'text-primary'}`}>Unity Ui KIt</h3>
                                    <p className={`text-sm text-opacity-50 mb-2 ${i=== open ? 'text-white' : 'text-black'}`}>Ui Design</p>
                                    <div className={`bg-opacity-25 inline-flex px-3 py-1 text-sm rounded font-semibold leading-[1.3] ${i=== open ? 'bg-white' : 'bg-primary text-primary'}`}>
                                        <span>10:00</span>
                                    </div>
                                </div>

                                <span className='ms-auto'>
                                <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 320 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z"></path></svg>
                                </span>
                        </li>
                        )}
                    </ul>
                </div>
                <div className="tab-content">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque at ullam velit architecto repellat sint minus, quibusdam aspernatur? Esse quos alias autem, temporibus sit repellat eaque, doloribus laborum, nihil rem atque iusto eum nemo voluptatibus. Tempore dicta quis quo temporibus, quibusdam ipsum animi expedita libero? Vero voluptate, eum blanditiis dicta ipsam voluptates minus corrupti eius sed? Veritatis repellat delectus ullam, aperiam, consectetur temporibus dolor exercitationem eaque assumenda, esse quaerat impedit optio. Provident esse, neque mollitia ullam corporis laudantium eaque sit ducimus blanditiis pariatur, illum dolorem distinctio! Ipsum quas vel non optio, nemo voluptas animi corrupti perferendis blanditiis sunt veritatis? Reiciendis explicabo maiores, consequuntur corporis praesentium, dolor, a dolores perferendis mollitia eum possimus rem quod vel nesciunt ipsam. Amet esse quo excepturi unde nihil. Ut labore optio reprehenderit nam! Soluta blanditiis nulla dignissimos reiciendis mollitia facere modi delectus? Alias praesentium voluptates tempora ex labore laudantium debitis, ducimus nulla! Ab, ipsam quae?
                </div>
            </div>
        </div>
    </div>
  )
}

export default Schedule