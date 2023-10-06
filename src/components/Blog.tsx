import React from "react";
import { motion } from "framer-motion";

const Blog = () => {
  return (
    <div>
      <div className="flex justify-evenly p-5">
        <div>
          <motion.p
            initial="hidden"
            animate="visible"
            variants={{
              hidden: {
                scale: 0.8,
                opacity: 0,
              },
              visible: {
                scale: 1,
                opacity: 1,
                transition: {
                  type: "spring",
                  mass: 3,
                  bounce: 0.5,
                  delay: 1,
                },
              },
            }}
            className="text-5xl"
          >
            Lorem Ipsum
          </motion.p>
          <motion.p
            initial="hidden"
            animate="visible"
            variants={{
              hidden: {
                scale: 0.8,
                opacity: 0,
              },
              visible: {
                scale: 1,
                opacity: 1,
                transition: {
                  type: "spring",
                  mass: 2,
                  bounce: 0.5,
                  delay: 1.3,
                },
              },
            }}
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero aut
            magni iste minus nam omnis animi id, tenetur maiores iusto
            voluptatibus consequatur quasi cupiditate esse labore quisquam
            voluptas nulla alias aliquid deserunt nemo laborum? Vel minus
            corporis, enim iusto deserunt minima? Modi libero necessitatibus
            facere officiis, commodi iusto? Cupiditate harum dolores nam
            mollitia omnis dolore at iste suscipit facere beatae, veritatis,
            odio, quod possimus necessitatibus inventore. Consequatur quidem
            consequuntur reiciendis facere eos excepturi, minus doloremque
            maxime voluptatem quaerat. Amet magnam ut, quo sed error accusamus
            cumque, aliquid voluptates voluptatum, vero facilis ipsam ratione
            accusantium repellat perferendis excepturi. Tempore recusandae
            inventore veritatis voluptatem dicta soluta quidem, ea itaque!
            Dolore totam accusamus corporis exercitationem, minima hic sed
            consequatur necessitatibus, voluptate repellendus in perferendis
            corrupti doloremque explicabo esse quam! Sed ratione voluptatibus
            numquam saepe quisquam quia repellendus repellat, culpa delectus.
            Quod, modi. Minima quo explicabo libero, dolores commodi corporis
            natus? Eligendi dolorem dicta reprehenderit, quaerat voluptatum quo
            iure reiciendis soluta eum minus officiis tempore dolores fugiat
            sapiente architecto exercitationem? Hic ea omnis dicta a sequi,
            suscipit, necessitatibus, obcaecati perspiciatis voluptas totam
            molestiae. Quos tenetur rerum eligendi ipsa reprehenderit quibusdam
            explicabo neque illo sed! Suscipit eaque, enim eum rem repudiandae
            quo itaque fugit quos, adipisci, architecto iusto amet inventore hic
            consequuntur dignissimos! Fuga, ullam dolores, earum sint explicabo
            commodi dolorum, porro quidem libero nulla voluptas tempore magnam.
            Vel, nihil. Temporibus reiciendis atque libero iusto officia odio!
            Quod iste nobis error voluptatem placeat tempore accusamus provident
            eveniet expedita sequi dicta, consequatur natus itaque, officia
            libero, deserunt rem! Hic non rem, ipsa, nostrum eum impedit
            voluptates id voluptatibus ab nulla facere pariatur incidunt. Maxime
            sit nemo rerum iusto fuga ratione est amet vel excepturi beatae.
            Ipsum quas delectus perferendis odit officiis porro. Ipsum quaerat,
            in quidem iusto, ducimus, neque numquam fuga cupiditate dolores
            atque consectetur. Non?
          </motion.p>
        </div>
        <motion.img
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {
              scale: 0.8,
              opacity: 0,
            },
            visible: {
              scale: 1,
              opacity: 1,
              transition: {
                type: "spring",
                mass: 3,
                bounce: 0.5,
                delay: 1,
              },
            },
          }}
          src="https://picsum.photos/600/400"
          alt="image"
        />
      </div>
    </div>
  );
};

export default Blog;
