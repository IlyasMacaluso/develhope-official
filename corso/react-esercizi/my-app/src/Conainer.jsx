import styles from "./Container.module.scss"
import ContainerChildren from "./ContainerChildren"

function Container() {
    return (
        <div className={styles.container}>
            <ContainerChildren title={<h2>Title</h2>}>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque optio distinctio
                    quo odit earum accusantium cum. Sint nisi soluta voluptatibus excepturi nulla
                    labore hic? Voluptate ut mollitia maxime maiores natus impedit ad ex! Sunt
                    deserunt totam quas, maiores distinctio, quibusdam delectus magnam explicabo
                    sint ipsam consequatur rerum aliquid magni facilis?
                </p>
            </ContainerChildren>
        </div>
    )
}

export default Container
