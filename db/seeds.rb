# frozen_string_literal: true

# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.createname: 'Luke', movie: movies.first)
vid_list = [
  ['Virabhadrasana I II & III', 'https://www.youtube.com/watch?v=1xhwfIbBYnA'],
  ['Utthita Trikonasana', 'https://www.youtube.com/watch?v=axsdMrZ6up8'],
  ['Yoga FlowSequence_1', 'https://www.youtube.com/watch?v=Zfp4J2PmjJw'],
  ['Symphonic Sun Salutation', 'https://www.youtube.com/watch?v=ELal3W3VMkY'],
  ['Yoga to De-stress at Work', 'https://www.youtube.com/watch?v=osohNw_0PHc'],
  ['CR Tree on a rock', 'https://www.youtube.com/watch?v=y4b6BgM5oh8'],
  ['Fluid Ascension', 'https://www.youtube.com/watch?v=s4QnlA0im-s'],
  ['Squat Pose/ Malasana', 'https://www.youtube.com/watch?v=UY0DgHGFayU'],
  ['Hamstring', 'https://www.youtube.com/watch?v=sRi6g3SdWl0'],
  ['Sun Salutation A', 'https://www.youtube.com/watch?v=oAf-oQWQghM'],
  ['Sun Salutation B', 'https://www.youtube.com/watch?v=gxS374USEb4'],
  ['Tadasana', 'https://www.youtube.com/watch?v=VBlw1oT3W7Q'],
  ['Foot Yoga', 'https://www.youtube.com/watch?v=UVivoNX-O1U'],
  ['Hand Yoga', 'https://www.youtube.com/watch?v=s2TlTfROxQ0'],
  ['Pura Vida Yoga', 'https://www.youtube.com/watch?v=cQ_Hhf7bbyE'],
  ['Downward Facing Dog', 'https://www.youtube.com/watch?v=zQI2keizzdg'],
  ['Tadasana', 'https://www.youtube.com/watch?v=Hid0QOEyjFo'],
  ['Body, Mind, Breath Connection Part 1', 'https://www.youtube.com/watch?v=jjZGYu-weNI'],
  ['Body, Mind, Breath Connection Part 2', 'https://www.youtube.com/watch?v=USoHtJwUy_A'],
  ['Body, Mind, Breath Connection Part 3', 'https://www.youtube.com/watch?v=ASmtRoOsqKA']
]

vid_list.each do |title, url|
  Video.find_or_create_by(title: title, url: url)
end
