# frozen_string_literal: true

# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
[
  'Virabhadrasana I II & III',
  'Utthita Trikonasana',
  'Yoga FlowSequence_1',
  'Symphonic Sun Salutation',
  'Yoga to De-stress at Work',
  'CR Tree on a rock',
  'Fluid Ascension',
  'Squat Pose/ Malasana',
  'Hamstring',
  'Sun Salutation A',
  'Sun Salutation B',
  'Tadasana',
  'Foot Yoga'
].each do |video|
  Title.find_or_create_by(video: video)
end

[
  'https://www.youtube.com/watch?v=1xhwfIbBYnA',
  'https://www.youtube.com/watch?v=axsdMrZ6up8',
  'https://www.youtube.com/watch?v=Zfp4J2PmjJw',
  'https://www.youtube.com/watch?v=ELal3W3VMkY',
  'https://www.youtube.com/watch?v=osohNw_0PHc',
  'https://www.youtube.com/watch?v=y4b6BgM5oh8',
  'https://www.youtube.com/watch?v=s4QnlA0im-s',
  'https://www.youtube.com/watch?v=UY0DgHGFayU',
  'https://www.youtube.com/watch?v=sRi6g3SdWl0',
  'https://www.youtube.com/watch?v=oAf-oQWQghM',
  'https://www.youtube.com/watch?v=gxS374USEb4',
  'https://www.youtube.com/watch?v=VBlw1oT3W7Q',
  'https://www.youtube.com/watch?v=UVivoNX-O1U'
].each do |video|
  Url.find_or_create_by(video: video)
end

puts "#{Title.count} vids.."

puts "#{Url.count} vids.."
