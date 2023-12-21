import React from "react";
import { render, screen, waitFor } from "../../testUtils";
import TaskOne from "./index";

describe("Task One", () => {
  it('should render the correct JSON object as a string to the page', async () => {
    render(<TaskOne />);
    const expectedOutput = [
      {
        title:
          "posuere nonummy integer non velit donec diam neque vestibulum eget vulputate ut ultrices vel augue vestibulum ante",
        publishDate: "9/24/2014",
        content:
          "Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.",
        category: "sports",
        id: "fb03bf15-351a-48fb-beef-d81305b0df54",
        images: [
          {
            id: "e0f5641d-fe28-441e-a225-046bcc1aed40",
            path: "/images/abhinav-Knkqm9rURig-unsplash.jpg",
            width: 6000,
            height: 4000,
          },
          {
            id: "95314a1e-14b1-46f4-891d-0debd4828ca6",
            path: "/image/michiel-annaert-qXdb_erAnqQ-unsplash.jpg",
            width: 7008,
            height: 4627,
          },
        ],
        authors: [
          {
            id: "0d2d8c41-6545-46de-8be6-754dac117ed6",
            name: "Adriena Collumbine",
          },
        ],
      },
      {
        title:
          "orci luctus et ultrices posuere cubilia curae nulla dapibus dolor vel est donec odio",
        publishDate: "10/7/2013",
        content:
          "Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.\n\nAenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.",
        category: "technology",
        id: "599187ed-479d-4dd4-83d4-dcfe11129816",
        images: [
          {
            id: "9c4f6018-de19-44bc-b736-2448221cd7c9",
            path: "/images/job-savelsberg-yjqVLkuBR_Q-unsplash.jpg",
            width: 5934,
            height: 3338,
          },
          {
            id: "9c4f6018-de19-44bc-b736-2448221cd7c9",
            path: "/images/job-savelsberg-yjqVLkuBR_Q-unsplash.jpg",
            width: 5934,
            height: 3338,
          },
        ],
        authors: [
          {
            id: "0d2d8c41-6545-46de-8be6-754dac117ed6",
            name: "Adriena Collumbine",
          },
        ],
      },
      {
        title:
          "interdum venenatis turpis enim blandit mi in porttitor pede justo eu massa donec dapibus duis at velit eu est congue",
        publishDate: "1/16/2016",
        content:
          "Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.\n\nEtiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.\n\nPraesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.",
        category: "politics",
        id: "b1567bbe-fcc5-4e09-8a62-a0c3f9c21bf0",
        images: [
          {
            id: "ec0b9fbc-6295-48df-9bb3-a2e2475ffa6c",
            path: "/images/cai-fang-6O9W0mac9-s-unsplash.jpg",
            width: 5895,
            height: 3936,
          },
          {
            id: "33ddb2ae-7eec-4d7f-99f2-344170d2d5a3",
            path: "/images/brigitte-elsner-NV0uJstjdsY-unsplash.jpg",
            width: 7632,
            height: 5088,
          },
          {
            id: "248a79de-05cf-4e7a-a68a-14f72697c163",
            path: "/images/bernd-dittrich-Wipw2qw0O5Q-unsplash.jpg",
            width: 3838,
            height: 3032,
          },
        ],
        authors: [
          {
            id: "0d2d8c41-6545-46de-8be6-754dac117ed6",
            name: "Adriena Collumbine",
          },
        ],
      },
      {
        title:
          "et tempus semper est quam pharetra magna ac consequat metus sapien",
        publishDate: "3/26/2018",
        content:
          "Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.\n\nProin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.\n\nAenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.",
        category: "politics",
        id: "cafd471a-759a-4c67-aaf4-b545a3a8c662",
        images: [
          {
            id: "e5d3b7cf-e463-4678-bc48-9deb2dbd244d",
            path: "/images/yuanpang-wa-4x15qE5eoeQ-unsplash.jpg",
            width: 5304,
            height: 7952,
          },
          {
            id: "3658a8fe-15a5-455b-85b2-ce842b91a35f",
            path: "/images/quang-nguyen-vinh-kECnaq8g-Xk-unsplash.jpg",
            width: 7312,
            height: 4877,
          },
        ],
        authors: [
          {
            id: "fde700a7-4100-4695-a8cd-9bc0272d85a0",
            name: "Florry Greveson",
          },
        ],
      },
      {
        title:
          "eget vulputate ut ultrices vel augue vestibulum ante ipsum primis in faucibus orci luctus et",
        publishDate: "9/4/2019",
        content:
          "In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.\n\nSuspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.\n\nMaecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.",
        category: "sports",
        id: "4f236948-b6d5-440b-bec2-52cc725289c4",
        images: [
          {
            id: "2d84ddd7-81b8-4d0d-8592-cabfa393c7d1",
            path: "/images/marek-piwnicki-Nhkc6X3XVcI-unsplash.jpg",
            width: 5345,
            height: 3007,
          },
          {
            id: "ec0b9fbc-6295-48df-9bb3-a2e2475ffa6c",
            path: "/images/cai-fang-6O9W0mac9-s-unsplash.jpg",
            width: 5895,
            height: 3936,
          },
        ],
        authors: [
          {
            id: "0d2d8c41-6545-46de-8be6-754dac117ed6",
            name: "Adriena Collumbine",
          },
          { id: "fb89ab6a-c80e-4b4b-af70-2edebeeaf890", name: "Jennine Fayre" },
          {
            id: "fde700a7-4100-4695-a8cd-9bc0272d85a0",
            name: "Florry Greveson",
          },
        ],
      },
      {
        title: "vel sem sed sagittis nam congue risus semper porta volutpat",
        publishDate: "6/1/2022",
        content:
          "Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.",
        category: "entertainment",
        id: "af8ffa66-1f28-4f3d-a4e6-e5b0ac7dca4c",
        images: [
          {
            id: "95314a1e-14b1-46f4-891d-0debd4828ca6",
            path: "/image/michiel-annaert-qXdb_erAnqQ-unsplash.jpg",
            width: 7008,
            height: 4627,
          },
          {
            id: "f4d88e20-5d1b-489a-a49e-283f5098dc35",
            path: "/images/marek-piwnicki-Ef3jVcCqS0Y-unsplash.jpg",
            width: 5055,
            height: 2843,
          },
        ],
        authors: [
          {
            id: "0d2d8c41-6545-46de-8be6-754dac117ed6",
            name: "Adriena Collumbine",
          },
          { id: "fb89ab6a-c80e-4b4b-af70-2edebeeaf890", name: "Jennine Fayre" },
        ],
      },
      {
        title: "lectus in est risus auctor sed tristique in tempus sit",
        publishDate: "2/15/2018",
        content:
          "Sed ante. Vivamus tortor. Duis mattis egestas metus.\n\nAenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.",
        category: "technology",
        id: "ee00517b-0147-4148-a9ac-40ee6a30e10f",
        images: [
          {
            id: "248a79de-05cf-4e7a-a68a-14f72697c163",
            path: "/images/bernd-dittrich-Wipw2qw0O5Q-unsplash.jpg",
            width: 3838,
            height: 3032,
          },
        ],
        authors: [
          {
            id: "fde700a7-4100-4695-a8cd-9bc0272d85a0",
            name: "Florry Greveson",
          },
        ],
      },
      {
        title:
          "sed vel enim sit amet nunc viverra dapibus nulla suscipit ligula",
        publishDate: "6/17/2021",
        content:
          "Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.",
        category: "politics",
        id: "c7fd0c57-c998-4871-801c-0d26cf19a718",
        images: [
          {
            id: "f4d88e20-5d1b-489a-a49e-283f5098dc35",
            path: "/images/marek-piwnicki-Ef3jVcCqS0Y-unsplash.jpg",
            width: 5055,
            height: 2843,
          },
        ],
        authors: [
          { id: "fb89ab6a-c80e-4b4b-af70-2edebeeaf890", name: "Jennine Fayre" },
        ],
      },
      {
        title:
          "quam sapien varius ut blandit non interdum in ante vestibulum ante ipsum primis",
        publishDate: "11/2/2014",
        content:
          "Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.\n\nIn sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.",
        category: "technology",
        id: "23b0360d-1ee7-488b-8ceb-3d42620049e9",
        images: [
          {
            id: "3658a8fe-15a5-455b-85b2-ce842b91a35f",
            path: "/images/quang-nguyen-vinh-kECnaq8g-Xk-unsplash.jpg",
            width: 7312,
            height: 4877,
          },
        ],
        authors: [
          {
            id: "0d2d8c41-6545-46de-8be6-754dac117ed6",
            name: "Adriena Collumbine",
          },
        ],
      },
      {
        title:
          "consequat varius integer ac leo pellentesque ultrices mattis odio donec vitae nisi nam ultrices libero non mattis pulvinar nulla",
        publishDate: "12/24/2022",
        content:
          "Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.",
        category: "entertainment",
        id: "2f4060e4-6ab2-41ef-a61b-db0d5e29b0fc",
        images: [
          {
            id: "e5d3b7cf-e463-4678-bc48-9deb2dbd244d",
            path: "/images/yuanpang-wa-4x15qE5eoeQ-unsplash.jpg",
            width: 5304,
            height: 7952,
          },
          {
            id: "95314a1e-14b1-46f4-891d-0debd4828ca6",
            path: "/image/michiel-annaert-qXdb_erAnqQ-unsplash.jpg",
            width: 7008,
            height: 4627,
          },
          {
            id: "33ddb2ae-7eec-4d7f-99f2-344170d2d5a3",
            path: "/images/brigitte-elsner-NV0uJstjdsY-unsplash.jpg",
            width: 7632,
            height: 5088,
          },
        ],
        authors: [
          {
            id: "0d2d8c41-6545-46de-8be6-754dac117ed6",
            name: "Adriena Collumbine",
          },
          { id: "fb89ab6a-c80e-4b4b-af70-2edebeeaf890", name: "Jennine Fayre" },
        ],
      },
    ];

    await waitFor(() => {
      expect(screen.getByText(JSON.stringify(expectedOutput))).toBeInTheDocument();
    })
  })
});
