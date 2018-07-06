---
title: Generating an Icosahedron sphere with correct UV mapping
date: "2018-07-08"
image: "./wireframe_icosphere.png"
---

Creating space simulations and models is something I like to do quite a bit during my free time. And as one might expect, I need a lot of sphere with different radius and resolution for the planets, moons and the likes. For a long time I used the base Unity sphere which when scaled up gets very ugly. I also quickly ran into complexities between the scale of the object in Unity and the size of it in my calculations. I then tried to generate different size of sphere in Blender to have higher resolutions at different scales, but it ended up even more confusing to have many different sphere mesh.

So eventually I decided I should start generating my own spheres. Ideally my solution should not imply anything more than adding the component to a gameobject to be as simple as using a Unity sphere. I did some research and there are basically three possibilities: generate a plane and warp it to get a standard UV Sphere, generate a cube and spherify it, or finally generate an icosahedron and subdivide it. There are other primitive shapes which can be used to generate a sphere, such as an octahedron. However, the consensus is that the higher number of vertices the base primitive uses, the lower the final distortion. Thus, the icosahedron with 20 faces is the highest possible base mesh with equal triangles that can be generated. Finally, it also has the advantage of using less triangles than other mesh type for a similar resolution.

After some thoughts, I decided to go the way of the icosahedron. The major challenges of the icosahedron is the mapping of UV coordinates, even more-so than for other types of sphere. As there are no straight line going from pole to pole on an icosahedron some face will be on both sides of a UV map and will create a ziggzagging distortion effect. The "MFT Development" link at the end of the post has a detailed explanation of the issue. It can get really confusing and as advised in the post I had to write down vertex by vertex what as happening.

![Warping effect and final result](./warping_and_result.png)

In the end, I am happy with the results and I find the icosahedron sphere very nice. Unfortunately at the poles there is a loss of data (part of the image is not mapped at all) and at lower resolution it is very visible. (I think this happens with all types of sphere, but for a UV Sphere.) So if you want nice looking poles a high resolution UV Sphere is the best. The biggest downside of UV sphere is that it will waste vertices at the pole by having way more than at the equator. I have included a UV Sphere generator in the project so you can test and see for yourself.

![Loss of data difference on each pole.](./pole_warping.png)

You can get the [Source code](https://github.com/alexisgea/sphere_mesher) from github. As a follow up I'd like to add my own cube sphere and port both the UV and Cube Sphere to a quad-tree where the subdivision is based on the camera distance.

Drop the SphereMesher script on a game object to get the sphere. The generation of the mesh itself happens in the IcoSphereBuilder class. It follows mostly the same way as in the MFT Development post.

Getting hte UV mapping orientated as Unity was also a bit confusing and I ended up with the following equation:
``` C#
float u = (Mathf.Atan2(vertCoord.z,vertCoord.x) / (2f * Mathf.PI));
float v = (Mathf.Asin(vertCoord.y) / Mathf.PI) + 0.5f;
```

Other ressources and inspiration:
[MFT Development](https://mft-dev.dk/uv-mapping-sphere/): detailed explanation of the warping issue.
[Unity Wiki](http://wiki.unity3d.com/index.php/ProceduralPrimitives): how to create a basic sphere.
[Catlike Coding](https://web.archive.org/web/20171218054621/http://www.binpress.com/tutorial/creating-an-octahedron-sphere/162): awesome tutorial and explanation of why an icosahedron gives less distortion.

![Final result comparison](./final_result.jpg)
